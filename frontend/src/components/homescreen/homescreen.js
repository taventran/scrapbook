import React from "react"; // Ensure React is imported
import "./homescreen.css";
import Navbar from "../navbar/navbar";
import { isMobile } from "react-device-detect";

function HomeScreen() {
  return (
    <div className={`homescreen ${isMobile ? "mobile" : "desktop"}`}>
      <Navbar />
      <div>
        <p className="text">
          Site is still under construction, nothing really works.
        </p>
        <p className="text"> Feel free to test out the create tab. </p>
        {isMobile ? (
          <div>
            <p className="text">THIS SITE WILL NOT WORK WELL ON MOBILE</p>
            <p className="text"> Currently only optimized for computers</p>
          </div>
        ) : (
          <p>(๑>؂•̀๑)</p>
        )}
        <img
          src={`${process.env.PUBLIC_URL}/photos/underconstruction.png`}
          alt="Under Construction"
        />
      </div>
    </div>
  );
}

export default HomeScreen;
