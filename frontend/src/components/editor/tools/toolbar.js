// import circleIcon from "../../svgs/circle.svg";
// import squareIcon from "../../svgs/square.svg";
import {
  FaRegSquare,
  FaRegCircle,
  FaRegTrashAlt,
  FaRegStar,
  FaRegImage,
} from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import { RiPaintFill } from "react-icons/ri";
import { FiTriangle } from "react-icons/fi";
import { CiText } from "react-icons/ci";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { useRef } from "react";

function Toolbar({
  handleShapeClick,
  handleFileChange,
  handlePaintClick,
  deleteObject,
}) {
  const hiddenUploadInput = useRef(null);
  const hiddenBackgroundInput = useRef(null);
  return (
    <div className="toolbar">
      <div id="paint" className="icon" onClick={handlePaintClick}>
        <RiPaintFill />
      </div>
      <div
        id="textBox"
        className="icon"
        onClick={() => handleShapeClick("textbox")}
      >
        <CiText />
      </div>
      <div
        id="circle"
        className="icon"
        onClick={() => handleShapeClick("circle")}
      >
        <FaRegCircle />
      </div>
      <div
        id="square"
        className="icon"
        onClick={() => handleShapeClick("square")}
      >
        <FaRegSquare />
      </div>
      <div id="star" className="icon" onClick={() => handleShapeClick("star")}>
        <FaRegStar />
      </div>

      <div
        id="triangle"
        className="icon"
        onClick={() => handleShapeClick("triangle")}
      >
        <FiTriangle />
      </div>
      <div id="line" className="icon" onClick={() => handleShapeClick("line")}>
        <TfiLayoutLineSolid />
      </div>
      <div id="upload" className="icon">
        <input
          ref={hiddenUploadInput}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <AiOutlineUpload onClick={() => hiddenUploadInput.current.click()} />
      </div>
      <div id="background" className="icon">
        <input
          ref={hiddenBackgroundInput}
          type="file"
          id="canvasBackground"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <FaRegImage onClick={() => hiddenBackgroundInput.current.click()} />
      </div>
      <div id="trash" className="icon">
        <FaRegTrashAlt onClick={() => deleteObject()} />
      </div>
    </div>
  );
}

export default Toolbar;
