import React from "react";
import { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker({ handleColorChange, showPicker }) {
  const [color, setColor] = useState("#ff000");

  const changeColor = (color) => {
    setColor(color.hex);
    handleColorChange(color);
  };

  return <SketchPicker color={color} onChangeComplete={changeColor} />;
}
