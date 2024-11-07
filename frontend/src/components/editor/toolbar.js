import circleIcon from "../svgs/circle.svg";
import squareIcon from "../svgs/square.svg";

function Toolbar({ handleShapeClick }) {
  return (
    <div>
      <div className="toolbar">
        <img
          className="svg-icon"
          src={circleIcon}
          alt="circle"
          id="circle"
          onClick={handleShapeClick}
        />
        <img
          className="svg-icon"
          src={squareIcon}
          alt="square"
          id="square"
          onClick={handleShapeClick}
        />
      </div>
    </div>
  );
}

export default Toolbar;
