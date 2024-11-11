import { Rect, Circle, FabricImage, Textbox } from "fabric";

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
