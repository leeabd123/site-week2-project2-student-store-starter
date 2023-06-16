import * as React from "react"
import "./Hero.css"


export default function Hero() {
    return (
      <div className="hero" id="green-post-id">
        <div className="intro">
          <h1>Welcome!<br/>Find Your Merch!</h1>
          <p className="mini-desc">We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. 
          Checkout whenever you're ready.</p>
        </div>
  
        <div className="green-post-icon">
          <img className="hero-img" src="\images\house.png" alt="House Icon" />
        </div>
      </div>
    );
  }
  
  