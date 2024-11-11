// import circleIcon from "../../svgs/circle.svg";
// import squareIcon from "../../svgs/square.svg";
import {
  FaRegSquare,
  FaRegCircle,
  FaRegTrashAlt,
  FaRegStar,
} from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import { RiPaintFill } from "react-icons/ri";
import { FiTriangle } from "react-icons/fi";
import { CiText } from "react-icons/ci";
import { useRef } from "react";

function Toolbar({
  handleShapeClick,
  handleFileChange,
  handlePaintClick,
  deleteObject,
}) {
  const hiddenFileInput = useRef(null);
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
      <div id="upload" className="icon">
        <input
          ref={hiddenFileInput}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <AiOutlineUpload onClick={() => hiddenFileInput.current.click()} />
      </div>
      <div id="trash" className="icon">
        <FaRegTrashAlt onClick={() => deleteObject()} />
      </div>
    </div>
  );
}

export default Toolbar;
