import React, { useEffect, useRef } from "react";
import fabric from "fabric";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // Add objects to the canvas
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 100,
      height: 100,
    });
    canvas.add(rect);

    // Clean up on unmount
    return () => canvas.dispose();
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default Canvas;
