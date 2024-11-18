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
  DrawLine,
  Download,
} from "./tools/toolFunctions";
import Toolbar from "./tools/toolbar";
import ColorPicker from "./tools/colorPicker";
import { Canvas, PencilBrush } from "fabric";

function Editor() {
  // Need canvasRef to make changes to Fabric canvas
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [file, setFile] = useState(null);
  // const [shape, setSelectedShape] = useState(null);
  const [tool, setTool] = useState(null);
  const [draw, setDraw] = useState(false);
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

  // Handle drawing mode based on the "draw" state
  useEffect(() => {
    if (canvas) {
      if (draw) {
        console.log("Draw On!");
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush = new PencilBrush(canvas);
        canvas.freeDrawingBrush.color = "#000";
        canvas.freeDrawingBrush.width = 5; // Set brush size
      } else {
        canvas.isDrawingMode = false;
      }
      canvas.renderAll();
    }
  }, [canvas, draw]);

  const handlePaintClick = () => {
    setShowPicker(!showPicker);
  };

  const handlePencilClick = () => {
    setDraw(!draw);
  };

  const handleShapeClick = (changeTool) => {
    // setSelectedShape(tool);

    if (changeTool !== tool) {
      setTool(changeTool);
    } else {
      if (changeTool === "pencil") {
        handlePencilClick();
      }
      // Deselect
      setTool(null);
      return;
    }

    if (changeTool === "pencil") {
      handlePencilClick();
    }

    if (changeTool === "square") {
      DrawRectangle(canvas);
    } else if (changeTool === "circle") {
      DrawCircle(canvas);
    } else if (changeTool === "textBox") {
      DrawTextbox(canvas);
    } else if (changeTool === "triangle") {
      DrawTriangle(canvas);
    } else if (changeTool === "star") {
      DrawStar(canvas);
    } else if (changeTool === "line") {
      DrawLine(canvas);
    } else if (changeTool === "download") {
      Download(canvas);
    }
  };

  const handleColorChange = (color) => {
    let activeObject = canvas.getActiveObject();
    if (tool === "pencil") {
      canvas.freeDrawingBrush.color = color.hex;
    } else if (activeObject) {
      activeObject.set("fill", color.hex);
      console.log(activeObject);
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
      canvas.remove(activeObject);
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
          handlePencilClick={handlePencilClick}
          deleteObject={deleteObject}
          currentTool={tool}
        />
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
    </div>
  );
}

export default Editor;
