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
//  const [hover, setHover] = useState(null);
//  const handleMouseOver = (e) => {
//    switch (e.target.id) {
//      case "pencil":
//        setHover("pencil")
//        break
//      case "paint":
//        setHover("paint")
//        break
//      case "textBox":
//        setHover("textBox")
//        break
//    }
//  }
  return (
    <div className="toolbar">
      <div
        id="pencil"
        className={`icon ${currentTool === "pencil" ? "selected" : ""}`}
        onClick={() => handleShapeClick("pencil")}
      >
        <TiPencil />
        <span class="icontiptext">Draw</span>
      </div>
      <div
        id="paint"
        className={`icon ${currentTool === "paint" ? "selected" : ""}`}
        onClick={handlePaintClick}
      >
        <RiPaintFill />
        <span class="icontiptext">Fill</span>
      </div>
      <div
        id="textBox"
        className={`icon ${currentTool === "textBox" ? "selected" : ""}`}
        onClick={() => handleShapeClick("textBox")}
      >
        <CiText />
        <span class="icontiptext">Text Box</span>
      </div>
      <div
        id="circle"
        className={`icon ${currentTool === "circle" ? "selected" : ""}`}
        onClick={() => handleShapeClick("circle")}
      >
         <FaRegCircle />
        <span class="icontiptext">Circle</span>
      </div>
      <div
        id="square"
        className={`icon ${currentTool === "square" ? "selected" : ""}`}
        onClick={() => handleShapeClick("square")}
      >
        <FaRegSquare />
        <span class="icontiptext">Square</span>
      </div>
      <div
        id="star"
        className={`icon ${currentTool === "star" ? "selected" : ""}`}
        onClick={() => handleShapeClick("star")}
      >
        <FaRegStar />
        <span class="icontiptext">Star</span>
      </div>
      <div
        id="triangle"
        className={`icon ${currentTool === "triangle" ? "selected" : ""}`}
        onClick={() => handleShapeClick("triangle")}
      >
        <FiTriangle />
        <span class="icontiptext">Triangle</span>
      </div>
      <div
        id="line"
        className={`icon ${currentTool === "line" ? "selected" : ""}`}
        onClick={() => handleShapeClick("line")}
      >
        <TfiLayoutLineSolid />
        <span class="icontiptext">Line</span>
      </div>
      <div id="upload" className="icon">
        <input
          ref={hiddenUploadInput}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <AiOutlineUpload onClick={() => hiddenUploadInput.current.click()} />
        <span class="icontiptext">Add Photo</span>
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
        <span class="icontiptext">Background Photo</span>
      </div>
      <div
        id="trash"
        className={`icon ${currentTool === "trash" ? "selected" : ""}`}
        onClick={deleteObject}
      >
        <FaRegTrashAlt />
        <span class="icontiptext">Delete Object</span>
      </div>
      <div
        id="download"
        className={`icon ${currentTool === "download" ? "selected" : ""}`}
        onClick={() => handleShapeClick("download")}
      >
        <MdOutlineSaveAlt />
        <span class="icontiptext">Download Canvas</span>
      </div>
    </div>
  );
}

export default Toolbar;
