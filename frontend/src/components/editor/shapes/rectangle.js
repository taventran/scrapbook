export const Rectangle = (canvasRef, x, y) => {
  if (canvasRef.current) {
    const ctx = canvasRef.current.getContext("2d");
    ctx?.strokeRect(x, y, 40, 50); // Draw the rectangle at the specified (x, y) position
  }
};
