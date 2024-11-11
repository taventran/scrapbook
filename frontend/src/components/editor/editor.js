import "./editor.css";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import {
  DrawRectangle,
  DrawCircle,
  addImage,
  DrawTextbox,
  DrawTriangle,
  DrawStar,
} from "./tools/toolFunctions";
import Toolbar from "./tools/toolbar";
import ColorPicker from "./tools/colorPicker";
import { Canvas } from "fabric";

function Editor() {
  // Need canvasRef to make changes to Fabric canvas
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [file, setFile] = useState(null);
  // const [shape, setSelectedShape] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

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

  const handlePaintClick = () => {
    setShowPicker(!showPicker);
  };

  const handleShapeClick = (shape) => {
    // setSelectedShape(shape);
    if (shape === "square") {
      DrawRectangle(canvas);
    } else if (shape === "circle") {
      DrawCircle(canvas);
    } else if (shape === "textbox") {
      DrawTextbox(canvas);
    } else if (shape === "triangle") {
      DrawTriangle(canvas);
    } else if (shape === "star") {
      DrawStar(canvas);
    }
  };

  const handleColorChange = (color) => {
    let activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.set("fill", color.hex);
      // Need render all so it changes before user selects off object
      canvas.renderAll();
    } else {
      canvas.backgroundImage = "";
      canvas.backgroundColor = color.hex;
      canvas.renderAll();
    }
  };

  const deleteObject = () => {
    let activeObject = canvas.getActiveObject();
    if (activeObject) {
      console.log(activeObject);
      canvas.remove(activeObject);
      console.log(activeObject);
    }
  };

  function handleFileChange(event) {
    const parentDivID = event.target.closest("div").id;
    console.log(parentDivID);
    const fileURL = URL.createObjectURL(event.target.files[0]);
    setFile([parentDivID, fileURL]);
  }

  useEffect(() => {
    if (file) {
      console.log("Updated file:", file[1]);
      addImage(canvas, file[1], file[0]);
    }
  }, [canvas, file]);

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
          deleteObject={deleteObject}
        />
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
    </div>
  );
}

export default Editor;
