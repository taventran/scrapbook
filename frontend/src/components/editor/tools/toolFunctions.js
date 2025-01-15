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
  const side = (canvas.width / 40) * Math.sqrt(Math.PI); // Match circle area
  const rect = new Rect({
    left: mouseX,
    top: mouseY,
    fill: "blue",
    width: side,
    height: side, // Make it a square to match the area
  });
  canvas.add(rect);
};

export const DrawCircle = (canvas, mouseX, mouseY) => {
  const radius = canvas.width / 40; // Set circle size
  const circle = new Circle({
    radius: radius,
    fill: "red",
    top: mouseY,
    left: mouseX,
  });
  canvas.add(circle);
};

export const DrawTriangle = (canvas, mouseX, mouseY) => {
  const radius = canvas.width / 70;
  const side = 2 * radius * Math.sqrt(3); // Side length of an equilateral triangle with the same area
  const triangle = new Triangle({
    width: side,
    height: side, // Equilateral triangle dimensions
    top: mouseY,
    left: mouseX,
    fill: "purple",
  });

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
    top: mouseY,
    left: mouseX,
    fill: "yellow",
  });
  canvas.add(star);
};

export const addImage = (canvas, file, id) => {
  FabricImage.fromURL(file).then(function (img) {
    if (id === "background") {
      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();
      const imgWidth = img.width;
      const imgHeight = img.height;
      // Scale the image to fit within the canvas width and height
      // Scale the image to stretch to fit the canvas size
      // img.scaleToHeight(canvasHeight);
      // img.scaleToWidth(canvasWidth);
      let imgRatio = imgWidth / imgHeight;
      let canvasRatio = canvasWidth / canvasHeight;
      if(imgRatio <= canvasRatio){
        if(imgHeight> canvasHeight){
          img.scaleToHeight(canvasHeight);
          img.scaleToWidth(canvasWidth);
        }
      }else{
        if(imgWidth> canvasWidth){
          img.scaleToWidth(canvasWidth);
          img.scaleToHeight(canvasHeight);
        }
      }
      canvas.centerObject(img);
      // Set image dimensions to match the canvas size
      // img.set({
      //   width: canvasWidth,
      //   height: canvasHeight,
      //   left: 0, // Align to the top-left corner
      //   top: 0
      // });
      canvas.backgroundImage = img;
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
    width: canvas.width/8,
    fontSize: 20,
    fill: "black",
  });
  canvas.add(textbox);
  canvas.renderAll();
};

export const Download = (canvas) => {
  let url = canvas.toDataURL({
    format: 'png',
    quality: 1,
  });
  let link = document.createElement("a");
  link.download = "canvas.png";
  link.href = url;
  console.log("Checking");
  console.log(link);
  link.click();
  console.log(url);
};

