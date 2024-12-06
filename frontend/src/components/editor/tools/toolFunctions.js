import {
  Rect,
  Circle,
  FabricImage,
  Textbox,
  Triangle,
  Polygon,
  Line,
} from "fabric";


export const DrawRectangle = (canvas, mouseX, mouseY) => {
  const rect = new Rect({
    left: mouseX,
    top: mouseY,
    fill: "blue",
    width: 100,
    height: 100,
  });
  canvas.add(rect);
};

export const DrawCircle = (canvas, mouseX, mouseY) => {
  const circle = new Circle({
    radius: 50,
    fill: "red",
    top: mouseY,
    left: mouseX,
  });
  canvas.add(circle);
};

export const DrawTriangle = (canvas, mouseX, mouseY) => {
  const triangle = new Triangle(
    {
      radius: 50,
      height: 100,
      width: 100,
      top: mouseY,
      left: mouseX,
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

export const DrawStar = (canvas, mouseX, mouseY) => {
  const star = new Polygon(points, {
    radius: 50,
    top: mouseY,
    left: mouseX,
  });
  canvas.add(star);
};

export const addImage = (canvas, file, id) => {
  FabricImage.fromURL(file).then(function (img) {
    if (id === "background") {
      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();
      // Scale the image to fit within the canvas width and height
      // Scale the image to stretch to fit the canvas size
      img.scaleToHeight(canvasHeight);
      img.scaleToWidth(canvasWidth);
      canvas.backgroundImage = img;
      canvas.backgroundColor = "#fff";
      img.canvas = canvas;
    } else {
      canvas.add(img);
    }

    canvas.renderAll();
  });
};

export const DrawLine = (canvas) => {
  const line = new Line([50, 100, 150, 100], {
    stroke: "black", // Set line color
    strokeWidth: 4, // Set line thickness
  });
  canvas.add(line);
};

export const DrawTextbox = (canvas, mouseX, mouseY) => {
  const textbox = new Textbox("Type here...", {
    left: mouseX,
    top: mouseY,
    width: 200,
    fontSize: 20,
    fill: "black",
    backgroundColor: "lightyellow",
  });
  canvas.add(textbox);
  canvas.renderAll();
};

export const Download = (canvas) => {
  let url = canvas.toDataURL("image/png");
  let link = document.createElement("a");
  link.download = "filename.png";
  link.href = url;
  link.click();
  console.log(url);
};

