import "./editor.css";
import React from "react";
import { useRef } from "react";
import Navbar from "../navbar/navbar";
import { Rectangle } from "./shapes/rectangle";

function Editor() {
  const canvasRef = useRef(null);

  const handleCanvasClick = (event) => {
    // Get the bounding rectangle of the canvas
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Calculate the click position relative to the canvas
    const x = event.clientX - rect.left - 40;
    const y = event.clientY - rect.top - 10;
    // Draw the rectangle at the calculated position
    Rectangle(canvasRef, x, y);
  };

  return (
    <div className="editor">
      <Navbar />
      <div className="book">
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
