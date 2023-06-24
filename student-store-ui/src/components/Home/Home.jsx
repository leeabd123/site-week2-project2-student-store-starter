import * as React from "react"
import "./Home.css"
import Feed from "../Feed/Feed"
import Hero from "../Hero/Hero"



export default function Home(props) {
  const { products, handleAddItemToCart, handleRemoveItemToCart } = props;
  return (
    <div className="home">
      <div className="post-container">
        <Hero/>

      </div>
      <div className="feed-container">
       <Feed products={props.products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>

      </div>
    </div>
  )
}


