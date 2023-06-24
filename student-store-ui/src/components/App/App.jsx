import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useState, useEffect } from "react";
import axios from "axios";
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductGrid from "../ProductGrid/ProductGrid"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from '../NotFound/NotFound';




export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkoutForm, setCheckoutForm] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [thePurchases, setThePurchases] = useState([]);
 


  
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };
  

  function handleAddItemToCart(productId) { 
    console.log("entering increment function in app")
    const orderIndex = shoppingCart.findIndex((order) => order.id === productId); 
    if (orderIndex !== -1) {
      console.log("order is not in cart", productId);
      const updatedCart = [...shoppingCart];
      updatedCart[orderIndex].quantity += 1;
      console.log("new quantity", updatedCart[orderIndex].quantity);

      setShoppingCart(updatedCart);
    } else {
      console.log("order is in cart", productId);

      const newOrder = { id: productId, quantity: 1 };
      console.log("new quantity", newOrder.quantity)
      setShoppingCart([...shoppingCart, newOrder]);
    }
    

    let getaproduct;
    products.forEach((a_product) => {
      if (a_product.id === productId) {
        getaproduct = a_product;
      }
  });

  let curr_price = parseFloat(getaproduct.price);
  console.log("the price", getaproduct);

  setTotal((prevTotal) => prevTotal + curr_price);

  };


  
function handleRemoveItemFromCart(productId) { 
  console.log("entering decrement function in app")

    const orderIndex = shoppingCart.findIndex((order) => order.id === productId); 
    if (orderIndex !== -1 && shoppingCart[orderIndex].quantity > 1) {
      // console.log("order is in cart", productId);

      const updatedCart = [...shoppingCart];
      updatedCart[orderIndex].quantity -= 1;
      setShoppingCart(updatedCart);
      console.log("new quantity", updatedCart[orderIndex].quantity);
      
     


    } else {
      const updatedCart = [...shoppingCart];
      const orderIndex = shoppingCart.findIndex((order) => order.id === productId); 
      updatedCart[orderIndex].quantity -= 1;
      updatedCart.filter((a_product) => (a_product.id) != productId)
      console.log("removing it from the cart cuz quantity is low")

      setShoppingCart(updatedCart);
    }
    let getaproduct;
      products.forEach((a_product) => {
        if (a_product.id === productId) {
          getaproduct = a_product;
        }
    });

    let curr_price = parseFloat(getaproduct.price);
    console.log("the price", getaproduct);
    let setting = total - curr_price;
    setTotal((prevTotal) => prevTotal - curr_price);
  

  };
  useEffect(() => {
    console.log("total", total);
  }, [total]);

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm(prevCheckoutForm => ({
      ...prevCheckoutForm,
      [name]: value
    }));
  }

  function handleOnSubmitCheckoutForm() {
    event.preventDefault();

     const { name, email}  = checkoutForm;
     const order = shoppingCart.map(item => ({
      itemId: item.id,
      quantity: item.quantity
    }));

    const req = {
      user: {
        name,
        email
      },
      shoppingCart: order
    };

  axios.post('http://localhost:3001/store', req)
  .then(response => {
    console.log("response ", response.data);
    setIsSuccess(true);
    setIsError(false)
    console.log("isSuccess", isSuccess)
    setShoppingCart([]);
    setCheckoutForm({});
  })
  .catch(error => {
    console.error(error);
    setIsError(false);
    setIsSuccess(true)
  });



  }
 
  

  



  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const response = await axios.get(
          "http://localhost:3001/store"
        );
        setProducts(response.data.products);
        setThePurchases(response.data.purchases[response.data.purchases.length - 1])
      } catch (error) {
        setError("Error fetching products.");
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
            isError={isError}
            isSuccess={isSuccess}
            thePurchases={thePurchases}
          />

          <Routes>
          <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
          <About/>
          <br/>
          <br/>
          
          <ContactUs/>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
