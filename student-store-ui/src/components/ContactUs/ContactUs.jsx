import * as React from "react"
import "./ContactUs.css"


export default function ContactUs() {
    return (
      <div className="contact-us" id="contact-id">
        <h1 className="contact-us-title-text">
            Contact Us

        </h1>
        <div className="contact-us-container">
            <div className="contact-us-text">
                <div className="email">
                <ul>
                    <p><strong>Email:</strong>  code@path.org</p>
                    <p><strong>Phone:</strong>  1-800-CODEPATH</p>
                    <p><strong>Address: </strong> 123 Fake Street, San Francisco, CA</p>
                </ul>
                <br></br>

                <br></br>

                <br></br>

                {/* Socials: <div> <img src= </div> */}


                </div>
            </div>

            <div clasName="contact-us-logo-portion">
                <img className="contact-us-logo-right" src="./images/logo.png"/>
            </div>
        </div>
       
      </div>
    );
  }
  