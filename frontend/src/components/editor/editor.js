import "./editor.css";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { DrawRectangle, DrawCircle, addImage } from "./tools/shapes/drawShape";
import Toolbar from "./tools/toolbar";
import ColorPicker from "./tools/colorPicker";
import { Canvas } from "fabric";
// import { useFabricCanvas } from "./fabricCanvas";

function Editor() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [file, setFile] = useState(null);

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
  const [showPicker, setShowPicker] = useState(false);

  const handlePaintClick = (shape) => {
    setShowPicker(!showPicker);
  };

  const handleShapeClick = (shape) => {
    setSelectedShape(shape);
    console.log(selectedShape);
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
      DrawRectangle(canvas);
    } else if (selectedShape === "circle") {
      DrawCircle(canvas);
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
