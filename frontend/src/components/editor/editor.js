import "./editor.css";
import React from "react";
import { useRef, useState } from "react";
import Navbar from "../navbar/navbar";
import { Rectangle, Circle } from "./tools/shapes/drawShape";
import Toolbar from "./tools/toolbar";
import ColorPicker from "./tools/colorPicker";

function Editor() {
  const canvasRef = useRef(null);
  const [shape, setShape] = useState(null);

  const handleShapeClick = (event) => {
    setShape(event.target.id);
    console.log(shape);
  };

  const handleColorChange = (color) => {
    let canvas = document.querySelector(".edit");
    canvas.style.background = color.hex;
  };

  const handleCanvasClick = (event) => {
    // Get the bounding rectangle of the canvas
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Calculate the click position relative to the canvas
    const x =
      ((event.clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
    const y =
      ((event.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;

    // Draw the rectangle at the calculated position
    if (shape === "square") {
      Rectangle(canvasRef, x, y);
    } else if (shape === "circle") {
      Circle(canvasRef, x, y);
    }
  };

  return (
    <div className="editor">
      <Navbar />
      <div className="book">
        <ColorPicker handleColorChange={handleColorChange} />
        <Toolbar handleShapeClick={handleShapeClick} />
        <canvas
          ref={canvasRef}
          className="edit"
          onClick={handleCanvasClick}
        ></canvas>
      </div>
    </div>
  );
}

export default Editor;
