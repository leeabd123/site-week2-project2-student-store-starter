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

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const response = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        setProducts(response.data.products);
      } catch (error) {
        setError("Error fetching products.");
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  console.log(products);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Routes>
          <Route path="/" element={<Home products={products} />} />
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
