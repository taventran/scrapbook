import "./editor.css";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import {
  DrawRectangle,
  DrawCircle,
  addImage,
  DrawTextbox,
} from "./tools/shapes/drawShape";
import Toolbar from "./tools/toolbar";
import ColorPicker from "./tools/colorPicker";
import { Canvas } from "fabric";

function Editor() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [file, setFile] = useState(null);

  // Initialize Fabric.js canvas
  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: canvasRef.current.parentElement.offsetWidth,
        height: canvasRef.current.parentElement.offsetHeight,
      });
      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();
      setCanvas(initCanvas);
      return () => {
        if (initCanvas) {
          initCanvas.dispose();
        }
      };
    }
  }, []);

  const [selectedShape, setSelectedShape] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handlePaintClick = (shape) => {
    setShowPicker(!showPicker);
  };

  const handleShapeClick = (shape) => {
    setSelectedShape(shape);
    if (selectedShape === "square") {
      DrawRectangle(canvas);
    } else if (selectedShape === "circle") {
      console.log(shape);
      DrawCircle(canvas);
    } else if (selectedShape === "textbox") {
      DrawTextbox(canvas);
    }
  };

  const handleColorChange = (color) => {
    let activeObject = canvas.getActiveObject();
    console.log(activeObject);
    if (activeObject) {
      activeObject.set("fill", color.hex);
    } else {
      canvas.backgroundColor = color.hex;
      canvas.renderAll();
    }
  };

  function handleFileChange(event) {
    console.log(event.target.files);
    setFile(URL.createObjectURL(event.target.files[0]));
    addImage(canvas, file);
  }

  return (
    <div className="editor">
      <Navbar />
      <div className="book">
        {showPicker && (
          <div>
            <ColorPicker handleColorChange={handleColorChange} />
            <button onClick={() => setShowPicker(false)}>Done</button>
          </div>
        )}
        <Toolbar
          handleShapeClick={handleShapeClick}
          handleFileChange={handleFileChange}
          handlePaintClick={handlePaintClick}
        />
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
    </div>
  );
}

export default Editor;
