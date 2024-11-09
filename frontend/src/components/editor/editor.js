import "./editor.css";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { DrawRectangle, DrawCircle } from "./tools/shapes/drawShape";
import Toolbar from "./tools/toolbar";
import ColorPicker from "./tools/colorPicker";
import { Canvas } from "fabric";
// import { useFabricCanvas } from "./fabricCanvas";

function Editor() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  // Initialize Fabric.js canvas
  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 750,
        height: 750,
      });
      initCanvas.backgroundColor = "#fff";
      // Have to render when changes made
      initCanvas.renderAll();
      setCanvas(initCanvas); // Store canvas instance in state
      // Cleanup: Dispose of the canvas when the component unmounts
      return () => {
        if (initCanvas) {
          initCanvas.dispose();
        }
      };
    }
  }, []);

  console.log("Fabric Canvas:", canvas);

  const [selectedShape, setSelectedShape] = useState(null);

  const handleShapeClick = (event) => {
    setSelectedShape(event.target.id);

    if (selectedShape === "square") {
      DrawRectangle(canvas);
    } else if (selectedShape === "circle") {
      DrawCircle(canvas);
    }
  };

  const handleColorChange = (color) => {
    // let test = document.querySelector(".edit");
    // test.style.background = color.hex;
    canvas.backgroundColor = color.hex;
    canvas.renderAll();
  };

  const handleCanvasClick = (event) => {
    if (!canvasRef.current) return;

    console.log("click:", canvasRef);
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log("Canvas clicked at:", x, y);

    if (selectedShape === "square") {
      DrawRectangle(canvas, x, y);
    } else if (selectedShape === "circle") {
      DrawCircle(canvas, x, y);
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
          onClick={handleCanvasClick}
          id="canvas"
        ></canvas>
      </div>
    </div>
  );
}

export default Editor;
