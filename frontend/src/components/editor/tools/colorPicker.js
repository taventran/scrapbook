import React from "react";
import { useState } from "react";
import { CompactPicker } from "react-color";

export default function ColorPicker({ handleColorChange, showPicker }) {
  const [color, setColor] = useState("#ff000");

  const changeColor = (color) => {
    setColor(color.hex);
    handleColorChange(color);
  };

  return <CompactPicker color={color} onChangeComplete={changeColor} />;
}
