export const Rectangle = (canvasRef, x, y) => {
  if (canvasRef.current) {
    const ctx = canvasRef.current.getContext("2d");
    ctx?.strokeRect(x, y, 40, 50); // Draw the rectangle at the specified (x, y) position
  }
};

export const Circle = (canvasRef, x, y) => {
  if (canvasRef.current) {
    const ctx = canvasRef.current.getContext("2d");
    const radius = 20; // Set the radius of the circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // Draw a circle
    ctx.fillStyle = "blue"; // Set the fill color
    ctx.fill(); // Fill the circle
    ctx.strokeStyle = "black"; // Set the stroke color
    ctx.lineWidth = 2;
    ctx.stroke(); // Stroke the circle border
  }
};
