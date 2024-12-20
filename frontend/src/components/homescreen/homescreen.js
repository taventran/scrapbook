import React from "react"; // Ensure React is imported
import "./homescreen.css";
import Navbar from "../navbar/navbar";
import { isMobile } from "react-device-detect";

function HomeScreen() {
  return (
    <div className={`homescreen ${isMobile ? "mobile" : "desktop"}`}>
      <Navbar />
      <div className="page">
        <h1 id="header">Scrapbook your 
          <span id="s">
            s
          </span>
          <span id="t">
            t
          </span>
          <span id="o">
            o
          </span>
          <span id="r">
            r
          </span>
          <span id="y">
            y
          </span> 
        </h1>
        <img id="banner"
        src={`${process.env.PUBLIC_URL}/photos/blanket.jpg`}
        alt="picnic-banner"
        />
        <div className="subheader-container">
          <h2 id="subheader">
            Scrapsite makes memories permanent
          </h2>
        </div>
        
        <div className="tutorial">
          <h2>How to use</h2>
          <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/uAkd63_IiLY?si=7wX1Gd_Zxp86BJUM" 
            title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
