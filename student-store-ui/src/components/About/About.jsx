import * as React from "react"
import "./About.css"


export default function About() {
    return (
      <div className="About" id="about-id">
        <h1 className="about-title-text">
            About

        </h1>
        <div className="about-container">
            <div className="about-text">
            The codepath student store offers great products at great prices from a great team and for a great cause.

We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.

All proceeds go towards bringing high quality CS education to college students around the country.
            </div>

            <div clasName="logo-portion">
                <img className="the-logo-right" src="./images/logo.png"/>
            </div>
        </div>
       
      </div>
    );
  }
  