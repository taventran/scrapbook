export const Rectangle = (canvasRef, x, y) => {
  if (canvasRef.current) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 1;
    ctx?.strokeRect(x, y, 10, 10); // Draw the rectangle at the specified (x, y) position
  }
};

export const Circle = (canvasRef, x, y) => {
  if (canvasRef.current) {
    const ctx = canvasRef.current.getContext("2d");
    const radius = 5; // Set the radius of the circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // Draw a circle
    ctx.strokeStyle = "black"; // Set the stroke color
    ctx.lineWidth = 1;
    ctx.stroke(); // Stroke the circle border
  }
};
