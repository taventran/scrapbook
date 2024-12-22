import React from "react";
import "./support.css";
import Navbar from "../navbar/navbar";
import { SiBuymeacoffee } from "react-icons/si";

function Support() {
    return ( 
        <div className="support-container">
            <Navbar/>
            <div className="about">
              <h1>
                About
              </h1>
              <p>
                A simple scrapbooking website made
                to be accessible and intuitive to 
                use.
              </p>
            </div>
            <div className="support">
                <img className="squidward" 
                  src={
              `${process.env.PUBLIC_URL}/photos/squidward.jpg`} 
              alt="Squidward panhandling"
              />
                <p>Please donate if you enjoyed this website</p>
                <a href="https://buymeacoffee.com/taventran">
                <div className="coffee"> 
                    <p> Buy me a coffee </p>
                    <SiBuymeacoffee style={{fontSize: "2em"}} 
                    id="coffee-icon" />
                  </div>
                </a>
            </div>
        </div>
    )
}


export default Support;
