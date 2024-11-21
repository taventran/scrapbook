import React from "react";
import "./support.css";
import Navbar from "../navbar/navbar";

function Support() {
    return ( 
        <div>
            <Navbar/>
            <div className="support">
                <img src={`${process.env.PUBLIC_URL}/photos/squidward.jpg`} alt="Squidward panhandling"/>
                <p>Spare change please!</p>
                <p>Anything helps!</p>
            </div>
        </div>
    )
}



export default Support;
