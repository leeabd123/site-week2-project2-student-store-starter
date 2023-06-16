import * as React from "react"
import "./Feed.css"
import Data from "../data/db.json"
import {useState} from "react"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Feed(props) {
    const [searchQuery, setSearchQuery] = useState("");

    const {products} = props;
    return (
        <div>
            <div className="search-row-container">
                    <SearchRow onSearch={setSearchQuery} />


            </div>
            <div className="products-container">
                <h1 className="product-header" id="buy-id">Best Selling Products</h1>
                {/* <Menu products={props.products} searchQuery={searchQuery} /> */}
                <ProductGrid products={props.products} searchQuery={searchQuery} />

            </div>

        </div>
      
     
    )
  }
  


  

export function SearchRow( { onSearch }) {

    const handleSearch = (event) => {
        const query = event.target.value;
        onSearch(query);
      };
    
    
    return (
      <div className="search-row-div">
  
        <input className="search" type="text" placeholder="Search" onChange={handleSearch}/>
        <img className="search-icon" src="images/search.png"/>
  
        <div className="questionmark-text">
          <img className="question-mark" src="images/question.png"/>
          <p className="help">Help</p>
        </div>
  
        <div className="mycart-button-container">
          <button className="mycart-button"><p className="my-cart">My Cart</p></button>
          <img className="cart" src="images/cart.png"/>
  
        </div>
      </div>
  
    )
  }
