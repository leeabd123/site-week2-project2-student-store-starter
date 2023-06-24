import * as React from "react"
import "./ShoppingCart.css"
import { useEffect } from "react";
import Reciept from "../Reciept/Reciept";
export default function ShoppingCart(props) {
    const { isOpen, products, shoppingCart, isSuccess, checkoutForm } = props;
    console.log(shoppingCart);
    const tax = 8.75;
    let subtotal = 0;



    for (const item of shoppingCart) {
        console.log(products, item)
        const product = products.find((product) => product.id === item.id);
        if (product != null) {
          subtotal += parseFloat(product.price) * item.quantity;
        }
    }
    subtotal = subtotal.toFixed(2)

    let subtotal_tax = ((tax / 100) * subtotal).toFixed(2);

    let total = parseFloat(subtotal) + parseFloat(subtotal_tax);
    total = total.toFixed(2)
    
  
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
            if (product && item.quantity > 0) {
            return (
                <div key={item.id} className="cart-product">
                <p className="cart-product-name"><strong>{product.name}</strong></p>
                <p className="cart-product-quantity"><strong>Quantity: {item.quantity}</strong></p>
                </div>
            );
            }
        });
                
    
        

    }
    if (isOpen) {
        console.log("entering is open subtotal is", subtotal)
        return (
            <div className="shopping-cart">
                {displayitems()}
                <div className="totals">
                <div className="subtotal"><strong>Subtotal: ${subtotal}</strong></div>
                    <div className="tax">
                       <strong> Tax and Fees: ${subtotal_tax} </strong>
                    </div>
                    <div className="total">
                       <strong> Total Price: ${total} </strong> 
                    </div>
                </div>

                
            </div>
            
        
            
        );
        
    }
    
}