import "./editor.css";
import { isMobile } from 'react-device-detect';
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
  // Handle color picker visibility when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (showPicker) {
  //       setShowPicker(!showPicker); // Hide the color picker
  //     }
  //   };
  //
  //   document.addEventListener("click", handleClickOutside);
  //
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [showPicker]);
    useEffect(() => {
      console.log(tool);
      if (canvas !== null) {
        canvas.off("mouse:down"); // Remove old listener
        canvas.off("mouse:move"); // Remove mouse move listener to prevent dragging objects

        let isDragging = false;
        let initialPosition = null;

        if (tool !== null) {
          // Mouse down event
          canvas.on("mouse:down", (event) => {
            const pointer = canvas.getPointer(event.e);
            const mouseX = pointer.x;
            const mouseY = pointer.y;
            initialPosition = { x: mouseX, y: mouseY }; // Store the initial position of the mouse
            isDragging = false; // Reset dragging flag

            // Selected an existing object
            if (canvas.getActiveObject() !== undefined) {
              const obj = canvas.getActiveObject();
              console.log(obj);
              return;
            }
          });

          // Mouse move event
          canvas.on("mouse:move", (event) => {
            if (initialPosition) {
              const pointer = canvas.getPointer(event.e);
              const mouseX = pointer.x;
              const mouseY = pointer.y;

              // If the mouse has moved more than a small threshold, it's a drag
              if (Math.abs(mouseX - initialPosition.x) > 5 || Math.abs(mouseY - initialPosition.y) > 5) {
                isDragging = true; // Set the dragging flag
              }
            }
          });

          // Mouse up event
          canvas.on("mouse:up", (event) => {
            if (!isDragging) {
              const pointer = canvas.getPointer(event.e);
              const mouseX = pointer.x;
              const mouseY = pointer.y;

              // Creating new object based on the selected tool
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
                Download(canvas);
              }
            }
          });
        }
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
    let activeObjects = canvas.getActiveObjects();
    if (tool === "pencil") {
      canvas.freeDrawingBrush.color = color.hex;
    } else if (activeObjects.length) {
      activeObjects.forEach((obj) => obj.set("fill", color.hex)); // Remove each selected object
      canvas.renderAll(); // Re-render canvas to reflect changes
    }
  };

  const deleteObject = () => {
      const activeObjects = canvas.getActiveObjects(); // Get all selected objects
      if (activeObjects.length) {
        activeObjects.forEach((obj) => canvas.remove(obj)); // Remove each selected object
        canvas.discardActiveObject(); // Clear selection
        canvas.renderAll(); // Re-render canvas to reflect changes
      }
  };

  const downloadCanvas = () => {
    Download(canvas);
    console.log("download");
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
    <div>
      {isMobile ? (
        <div className="mobile">
          <Navbar />
          <h1> This website was not designed for mobile </h1>
          <p> If you wish to use the create tool you will have to be on a computer </p>
        </div>
        ) : (
        <div className="editor">
        <Navbar />
        <div className="book">
          {!showCanvas && 
            <Form handleSubmit={handleSubmit} />
          }
          <div className="canvasContainer">
          {showCanvas &&
          <div className="tools">
            {showPicker &&
            <div className="colors">
              <ColorPicker className="colorPicker" handleColorChange={handleColorChange}/>
            </div>
            } 
            <Toolbar
              handleShapeClick={handleShapeClick}
              handleFileChange={handleFileChange}
              handlePaintClick={handlePaintClick}
              deleteObject={deleteObject}
              currentTool={tool}
              downloadCanvas={downloadCanvas}
            />
          </div>
          }
          {showCanvas && 
            <div className="size">
              <canvas ref={canvasRef} id="canvas"></canvas>
            </div>
          }
          </div>
        </div>
    </div>
    )}
    </div>
  );
}

export default Editor;
