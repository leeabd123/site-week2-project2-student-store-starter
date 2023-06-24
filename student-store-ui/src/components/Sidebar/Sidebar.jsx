import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Reciept from "../Reciept/Reciept"

export default function Sidebar(props) {
  const { isOpen,
    shoppingCart,
    products,
    checkoutForm,
    handleOnCheckoutFormChange,
    handleOnSubmitCheckoutForm,
    handleOnToggle, isError, isSuccess, thePurchases } = props
 
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={handleOnToggle}>
        Open Cart
      </button>
      {isOpen && (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button className="toggle-button" onClick={handleOnToggle}>
            Close Cart
          </button>
          <>
          <ShoppingCart shoppingCart={shoppingCart} products={products} isOpen={isOpen} isSuccess={isSuccess}/>
          <CheckoutForm 
          products={products}
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          checkoutForm={checkoutForm}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          isError={isError}
          isSuccess={isSuccess}
          thePurchases={thePurchases}
          />
        </>
        </div>
        
      )}
    </section>
  )
}
