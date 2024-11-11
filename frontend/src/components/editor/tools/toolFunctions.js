import { Rect, Circle, FabricImage, Textbox, Triangle, Polygon } from "fabric";

export const DrawRectangle = (canvas) => {
  const rect = new Rect({
    left: 30,
    top: 30,
    fill: "blue",
    width: 100,
    height: 100,
  });
  canvas.add(rect);
};

export const DrawCircle = (canvas) => {
  const circle = new Circle({
    radius: 50,
    fill: "red",
    top: 30,
    left: 30,
  });
  canvas.add(circle);
};

export const DrawTriangle = (canvas) => {
  const triangle = new Triangle(
    {
      radius: 50,
      height: 100,
      width: 100,
      top: 30,
      left: 30,
    },
    false,
  );

  canvas.add(triangle);
};

// Points for star
const points = [
  { x: 174.95, y: 37.5 },
  { x: 189.5, y: 80.45 },
  { x: 234.5, y: 80.45 },
  { x: 198.5, y: 107.45 },
  { x: 211.5, y: 150.45 },
  { x: 175, y: 124.95 },
  { x: 138.45, y: 150.5 },
  { x: 151.5, y: 107.5 },
  { x: 115.5, y: 80.5 },
  { x: 160.5, y: 80.5 },
];

export const DrawStar = (canvas) => {
  const star = new Polygon(points, {
    radius: 50,
    top: 30,
    left: 30,
  });
  canvas.add(star);
};

export const addImage = (canvas, file) => {
  FabricImage.fromURL(file).then(function (img) {
    canvas.add(img);
    canvas.renderAll();
  });
};

export const DrawTextbox = (canvas) => {
  const textbox = new Textbox("Type here...", {
    left: 50,
    top: 50,
    width: 200,
    fontSize: 20,
    fill: "black",
    backgroundColor: "lightyellow",
  });
  canvas.add(textbox);
  canvas.renderAll();
};