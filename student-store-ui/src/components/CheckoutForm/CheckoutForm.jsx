import React from "react";
import "./CheckoutForm.css";
import Reciept from "../Reciept/Reciept";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function CheckoutForm(props) {
  const {
    products,
    isOpen,
    shoppingCart,
    checkoutForm,
    handleOnCheckoutFormChange,
    handleOnSubmitCheckoutForm,
    isError,
    isSuccess,
    thePurchases
  } = props;

  
  const displayitems = () => {


    if (shoppingCart.length == 0) {
        console.log(shoppingCart.length)
        return (
            <p className="notification">
            No items added to cart yet. Start shopping now!
          </p>
        
        );
    } 
    
    return shoppingCart.map((item) => {
        const product = products.find((product) => product.id === item.id);
        if (product) {
        return (
            <div key={item.id} className="cart-product">
            <p className="cart-product-name"><strong>{product.name}</strong></p>
            <p className="cart-product-quantity"><strong>Quantity: {item.quantity}</strong></p>
            </div>
        );
        }
    });
            
    let email = "";
    let name = "";
    

}

  return (
    <form className="checkout-form">
      <div className="form-field">
        <label htmlFor="email"><strong>Email: </strong></label>
        <input
          className="checkout-form-input"
          type="email"
          id="email"
          name="email"
          placeholder="student@codepath.org"
          value={checkoutForm?.email}
          onChange={(event) =>
            handleOnCheckoutFormChange(event.target.name, event.target.value)

          }
        />
      </div>

      <div className="form-field">
        <label htmlFor="name"><strong>Name: </strong></label>
        <input
          className="checkout-form-input"
          type="text"
          id="name"
          name="name"
          placeholder="Student Name"
          value={checkoutForm?.name}
          onChange={(event) =>
            handleOnCheckoutFormChange(event.target.name, event.target.value)
          }
        />
      </div>

      <div className="form-field">
        <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>
          Checkout
        </button>
      </div>

      {isError && <div className="error">Error occurred during checkout</div>}
      {isSuccess && (
        <div className="success">
            <p class="orderplaced">Success! Order has been placed.</p>
            <Reciept thePurchases={thePurchases} products={products} shoppingCart={ShoppingCart}/>
        </div>
      )}
    </form>
  );
}
