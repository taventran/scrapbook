import Navbar from "../navbar/navbar";

function Editor() {
  return (
    <div className="editor">
      <Navbar />

      <div className="book">
        <canvas height="512px" width="512px"></canvas>
      </div>
    </div>
  );
}

export default Editor;
