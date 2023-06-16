import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
      <div className="logo">
        <Link to="/">
          <img className="logo-icon" src="images/logo.png" alt="Logo" />
        </Link>
      </div>
    );
  }