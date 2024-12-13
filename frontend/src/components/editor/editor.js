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
import Form from "./form";

function Editor() {
  // Need canvasRef to make changes to Fabric canvas
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [file, setFile] = useState(null);
  const [tool, setTool] = useState(null);
  const [draw, setDraw] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [canvasSize, setCanvasSize] = useState(null);
  const [showCanvas, setShowCanvas] = useState(false);
  const [objPos, setObjPos] = useState(null);
  // Initialize Fabric.js canvas
  useEffect(() => {
    if (showCanvas) {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: canvasSize[0],
        height: canvasSize[1], 
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
    } 
  }, [canvasSize, showCanvas]);

  useEffect(() => {
    console.log(tool);
    if (canvas !== null) {
      canvas.off("mouse:down"); // Remove old listener
    }
    if (tool !== null) {
      canvas.on("mouse:down", (event) => {
        const pointer = canvas.getPointer(event.e);
        const mouseX = pointer.x;
        const mouseY = pointer.y;
        // Selected an existing object
        if (canvas.getActiveObject() !== undefined) {
          const obj = canvas.getActiveObject();
          console.log(obj)
          setObjPos({
            top: obj.top + 100,
            left: obj.left
          });
          handlePaintClick();
          return
        }
        // Creating new object
        if (tool === "square") {
          DrawRectangle(canvas, mouseX, mouseY);
        } else if (tool === "circle") {
          DrawCircle(canvas, mouseX, mouseY);
        } else if (tool === "textBox") {
          DrawTextbox(canvas, mouseX, mouseY);
        } else if (tool === "triangle") {
          DrawTriangle(canvas, mouseX, mouseY);
        } else if (tool === "star") {
          DrawStar(canvas, mouseX, mouseY);
        } else if (tool === "line") {
          DrawLine(canvas, mouseX, mouseY);
        } else if (tool === "download") {
          Download(canvas, mouseX, mouseY);
        }
    });
  }
  }, [tool, canvas, showCanvas]);

  // Handle drawing mode based on the "draw" state
  useEffect(() => {
    if (canvas) {
      if (draw) {
        console.log("Draw On!");
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush = new PencilBrush(canvas);
        canvas.freeDrawingBrush.color = "#000";
        canvas.freeDrawingBrush.width = 2; // Set brush size
      } else {
        canvas.isDrawingMode = false;
        console.log("Drawing Off!")
      }
      canvas.renderAll();
    }
  }, [canvas, draw, canvasSize]);

  const handlePaintClick = () => {
    setShowPicker(!showPicker);
  };

  const handlePencilClick = () => {
    setDraw(!draw);
  };


  const handleShapeClick = (changeTool) => {
    console.log(changeTool);
    if (changeTool !== tool) {
      // Necessary logic to start and stop draw
      if (changeTool === "pencil") {
        handlePencilClick();
      } else if (tool === "pencil") {
        handlePencilClick();
      }
      setTool(changeTool);
    } else {
      // Deselect
      if (changeTool === "pencil") {
        handlePencilClick();
      }
      setTool(null);
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

  function handleSubmit(event) {
    const data = new FormData(event.target)
    setCanvasSize([data.get("width"), data.get("height")])
    setShowCanvas(true)
  }

  return (
    <div className="editor">
      <Navbar />
      <div className="book">
        {!showCanvas && 
          <Form handleSubmit={handleSubmit} />
        }
        {showCanvas &&
          <Toolbar
            handleShapeClick={handleShapeClick}
            handleFileChange={handleFileChange}
            handlePaintClick={handlePaintClick}
            deleteObject={deleteObject}
            currentTool={tool}
          />
        }
        <div className="canvasContainer">
        {showPicker && (
          <div className="colorPicker" style={objPos}>
            <ColorPicker handleColorChange={handleColorChange} />
            <button onClick={() => setShowPicker(false)}>Done</button>
          </div>
        )}
        {showCanvas && 
          <div className="size">
            <canvas ref={canvasRef} id="canvas"></canvas>
          </div>
        }
        </div>
      </div>
    </div>
  );
}

export default Editor;
