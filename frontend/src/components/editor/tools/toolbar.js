import {
  FaRegSquare,
  FaRegCircle,
  FaRegTrashAlt,
  FaRegStar,
  FaRegImage,
} from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";
import { RiPaintFill } from "react-icons/ri";
import { FiTriangle } from "react-icons/fi";
import { CiText } from "react-icons/ci";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { TiPencil } from "react-icons/ti";
import { useRef } from "react";

function Toolbar({
  handleShapeClick,
  handleFileChange,
  handlePaintClick,
  handlePencilClick,
  deleteObject,
  currentTool,
}) {
  const hiddenUploadInput = useRef(null);
  const hiddenBackgroundInput = useRef(null);

  return (
    <div className="toolbar">
      <div
        id="pencil"
        className={`icon ${currentTool === "pencil" ? "selected" : ""}`}
        onClick={handlePencilClick}
      >
        <TiPencil />
      </div>
      <div
        id="paint"
        className={`icon ${currentTool === "paint" ? "selected" : ""}`}
        onClick={handlePaintClick}
      >
        <RiPaintFill />
      </div>
      <div
        id="textBox"
        className={`icon ${currentTool === "textBox" ? "selected" : ""}`}
        onClick={() => handleShapeClick("textBox")}
      >
        <CiText />
      </div>
      <div
        id="circle"
        className={`icon ${currentTool === "circle" ? "selected" : ""}`}
        onClick={() => handleShapeClick("circle")}
      >
        <FaRegCircle />
      </div>
      <div
        id="square"
        className={`icon ${currentTool === "square" ? "selected" : ""}`}
        onClick={() => handleShapeClick("square")}
      >
        <FaRegSquare />
      </div>
      <div
        id="star"
        className={`icon ${currentTool === "star" ? "selected" : ""}`}
        onClick={() => handleShapeClick("star")}
      >
        <FaRegStar />
      </div>
      <div
        id="triangle"
        className={`icon ${currentTool === "triangle" ? "selected" : ""}`}
        onClick={() => handleShapeClick("triangle")}
      >
        <FiTriangle />
      </div>
      <div
        id="line"
        className={`icon ${currentTool === "line" ? "selected" : ""}`}
        onClick={() => handleShapeClick("line")}
      >
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
      <div
        id="trash"
        className={`icon ${currentTool === "trash" ? "selected" : ""}`}
        onClick={deleteObject}
      >
        <FaRegTrashAlt />
      </div>
      <div
        id="download"
        className={`icon ${currentTool === "download" ? "selected" : ""}`}
        onClick={() => handleShapeClick("download")}
      >
        <MdOutlineSaveAlt />
      </div>
    </div>
  );
}

export default Toolbar;
