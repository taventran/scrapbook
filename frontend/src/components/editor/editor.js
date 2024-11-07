import "./editor.css";
import React from "react";
import { useRef, useState } from "react";
import Navbar from "../navbar/navbar";
import { Rectangle, Circle } from "./shapes/drawShape";
import Toolbar from "./toolbar";

function Editor() {
  const canvasRef = useRef(null);
  const [shape, setShape] = useState(null);

  const handleShapeClick = (event) => {
    setShape(event.target.id);
    console.log(shape);
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
