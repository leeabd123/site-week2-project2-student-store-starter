import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <nav className="navbar-content">
      <Icons/>
      <div className="menu-item-content">
      <NavLinks/>

      </div>
      </nav>
    </nav>
  )
}


// export function NavLinks({ navLinks }) {
//   return (
//     <ul className="nav-links">
//       {navLinks.map((link, index) => (
//         <NavLink key={index} navLink={link} />
//       ))}
//     </ul>
//   );
// }


export function NavLinks() {
  return (
    <div className="navbar-menu-items">
      <a className="menu-tabs" href="#green-post-id">Home</a>
      <a className="menu-tabs" href="#about-id">About Us</a>
      <a className="menu-tabs" href="#contact-id">Contact Us</a>
      <a className="menu-tabs" href="#buy-id">Buy Now</a>
    </div>
  );
}


export function Icons() {
  return (
    <div className="icon">
      <div className="logo-div">
        <Logo />
      </div>
      <div className="icons-div">
        <img className="navbar-icon" src = "images\twitter.png"/>
        <img className="navbar-icon" src= "images\instagram.png"/>
        <img className="navbar-icon" src= "images\facebook.png"/>
      </div>
     


    </div>
  )
}

