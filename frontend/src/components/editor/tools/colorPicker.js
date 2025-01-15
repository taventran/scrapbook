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

// import React from 'react';
// import { CustomPicker } from 'react-color';
//
// class ColorPicker extends React.Component {
//   render() {
//     const [color, setColor] = useState("#ff000");
//     return <div>MyColorPicker</div>;
//   }
// }
//
// export default CustomPicker(ColorPicker);

