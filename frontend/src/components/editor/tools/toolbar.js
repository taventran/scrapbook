// import circleIcon from "../../svgs/circle.svg";
// import squareIcon from "../../svgs/square.svg";
import { FaRegSquare } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import { useRef } from "react";
import { RiPaintFill } from "react-icons/ri";

function Toolbar({ handleShapeClick, handleFileChange, handlePaintClick }) {
  const hiddenFileInput = useRef(null);
  return (
    <div>
      <div className="toolbar">
        <div id="paint" className="icon" onClick={handlePaintClick}>
          <RiPaintFill />
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
        <div id="upload" className="icon">
          <input
            ref={hiddenFileInput}
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <AiOutlineUpload onClick={() => hiddenFileInput.current.click()} />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
