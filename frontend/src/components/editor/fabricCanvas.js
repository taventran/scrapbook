import { useEffect, useState, useRef } from "react";
import { Canvas } from "fabric";

export const useFabricCanvas = (canvasRef) => {
  const fabricCanvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (canvasRef.current && !fabricCanvasRef.current) {
      // Initialize the Fabric canvas only once
      fabricCanvasRef.current = new Canvas(canvasRef.current);
      fabricCanvasRef.current.setWidth(500); // Set canvas width
      fabricCanvasRef.current.setHeight(500); // Set canvas height
      fabricCanvasRef.current.backgroundColor = "#f0f0f0"; // Optional: set background color
      setCanvas(fabricCanvasRef);
    }

    // Cleanup function to dispose of the canvas when the component unmounts
    return () => {
      fabricCanvasRef.current.dispose();
    };
  }, [canvasRef]);
  console.log("Fabric Canvas:", canvas);

  return canvas;
};
