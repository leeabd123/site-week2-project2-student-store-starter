import * as React from "react"
import "./ProductGrid.css"
import { useState } from 'react'
import ProductCard from "../ProductCard/ProductCard"


export default function ProductGrid(props) {

  const { products, searchQuery, handleAddItemToCart, handleRemoveItemToCart } = props;

    return (
      <div className="product-grid">
        <Clothing products={props.products} searchQuery={props.searchQuery}  handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
      </div>
    )
  }
  

  export function Clothing(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const { products, searchQuery, handleAddItemToCart, handleRemoveItemToCart } = props


    
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) );

    
   
    return (
    <>
       <div className="panels">
        <div className="all">
            <Panel
                title="All"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            
            >   
            
            <Products products={filteredProducts} category="all" searchQuery={searchQuery} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
        
            </Panel>
        </div>
        <div className="clothing">
            <Panel
                title="Clothing"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            
            >   
            
            <Products products={filteredProducts} category="clothing" searchQuery={searchQuery} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>

            </Panel>

        </div>
        <div className="food">
            <Panel
                title="Food"
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)}
            
            >   
            
            <Products products={filteredProducts} category="food" searchQuery={searchQuery} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>

        
            </Panel>

        </div>

        <div className="a-category">
            <Panel
                title="Accessories"
                isActive={activeIndex === 3}
                onShow={() => setActiveIndex(3)}
            
            >   
            
            <Products products={filteredProducts} category="accessories" searchQuery={searchQuery} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>

        
            </Panel>

        </div>
        <div className="tech">
            <Panel
                title="Tech"
                isActive={activeIndex === 4}
                onShow={() => setActiveIndex(4)}
            
            >   
            
            <Products products={filteredProducts} category="tech" searchQuery={searchQuery} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>

        
            </Panel>

        </div>
       
       
      </div>
    </>
       
    
    )

   
  }
  
export function Panel({ title, children, isActive, onShow }) {
  return (
    <div className="panel">
      <h3 className="titles" onClick={onShow}>{title}</h3>
      {isActive && <Children children={children}/>}
    </div>
  );
  }
  
  
export function Children(props) {
    const {children} = props;
    return (
        <div>{props.children}</div>

    )   
}
  
  export function Products(props) {
    const {products, isSearching, searchQuery, handleAddItemToCart, handleRemoveItemToCart} = props;

    const [cartnum, setCount] = useState(0);

    const handleClickIncrement = () => {
        setCount(cartnum + 1);
        
    };

    const handleClickDecrement = () => {
        if(cartnum - 1 >= 0) {
            setCount(cartnum - 1);
        }
    };

    const handleimageonClick = () => {
        
    }




    return (
        <div className="product-div">
          {products.map((element, index) => {
            if (element.category === props.category) {
              return (
                <div className="a-product-div">
                <ProductCard product={element} productId={element.id} quantity="0" category={element.category} showDescription={false} image={element.image} price={element.price} name={element.name} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
                </div>
              );
            } else if (props.category == "all") {
                return (
                    <div className="a-product-div">
                        <ProductCard product={element} productId={element.id} quantity="0" category={element.category} showDescription={false} image={element.image} price={element.price} name={element.name}  handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
                    </div>
                  );
             
            } else {
                return null;
            }
          })}
        </div>
      );
}



