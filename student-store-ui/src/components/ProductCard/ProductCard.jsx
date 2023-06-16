import * as React from "react"
import "./ProductCard.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';



export default function ProductCard(props) {
    const { product, productId, quantity, showDescription, category, image, price, name, handleAddItemToCart, handleRemoveItemToCart  } = props;
    
    const [cartnum, setCount] = useState(0);

    const handleClickIncrement = () => {
        setCount(cartnum + 1);
        
    };

    const handleClickDecrement = () => {
        if(cartnum - 1 >= 0) {
            setCount(cartnum - 1);
        }
    };
    console.log("enteredproductcard")

    const format = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });


  return (
    <section className="product-card">
        <div className="media">
            <Link to={`/products/${productId}`} className="product-card">
            <img className="a-product" src={props.image} key={props.productId} />
            </Link>
        </div>
        

                  <div className="product-info-div">
                    <div className="button-container">
                      <button className="info-button" onClick={handleClickIncrement}>+</button>
                      <button className="info-button" onClick={handleClickDecrement}>-</button>
                      <p className="cart-num">{cartnum}</p>
                    </div>
                    <p className="product-name">{props.name}</p>
                    <div className="stars">
                      ⭐️⭐️⭐️⭐️★
                    </div>
                    <p className="product-price">{format}</p>
                    {showDescription && <p className="product-description">{product.description}</p>}

                  </div>
                 
               
    </section>
  )
}
