import React, { useEffect, useState } from "react";
import "./form.css";

function Form({ handleSubmit }) {
  // State to manage the width and height
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const canvasHolder = document.getElementsByClassName("size");
    console.log(canvasHolder);
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className="container">
      <p>Desired size of canvas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            type="number"
            min="50"
            max="2560"
            name="width"
            id="width"
            value={width} // Controlled by state
            onChange={(e) => setWidth(Number(e.target.value))} // Update state on change
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            name="height"
            type="number"
            min="50"
            max="2560"
            id="height"
            value={height} // Controlled by state
            onChange={(e) => setHeight(Number(e.target.value))} // Update state on change
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="helper-text">
        For your computer display size, the recommended width
        and height is: {window.innerWidth} x {window.innerHeight}.
        Based on current window's size.
      </p>
    </div>
  );
}

export default Form;
