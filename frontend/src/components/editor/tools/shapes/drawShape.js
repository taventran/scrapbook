import { Rect, Circle } from "fabric";

export const DrawRectangle = (canvas) => {
  const rect = new Rect({
    left: 30,
    top: 30,
    fill: "blue",
    width: 100,
    height: 100,
  });
  console.log("looking at rectangle: ", rect);
  canvas.add(rect);
};

export const DrawCircle = (canvas) => {
  const circle = new Circle({
    radius: 50,
    fill: "red",
    top: 30,
    left: 30,
  });
  console.log("looking at circle: ", circle);
  canvas.add(circle);
};
