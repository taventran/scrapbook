import React, {useEffect, useState} from "react"
import "./form.css"

function Form({handleSubmit}) {
  const [size, setSize] = useState(null);
  useEffect( () => {
    const canvasHolder = 
      document.getElementsByClassName("size");
    console.log(canvasHolder);
    // setSize(canvasHolder[0].innerWidth,
    //   canvasHolder[0].innerHeight);
    // console.log(size);
  });

  return (
    <div className="container">
      <p>Desired size of canvas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="width">Width: </label>
          <input type="number" min="50" max="2560" 
            name="width" id="width" value={window.innerWidth}/>
        </div>
        <div>
          <label  for="height">Height: </label>
          <input name="height" type="number" min="50"
            max="2560" id="height" value={window.innerHeight}/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="helper-text"> 
        For your computer display size the recommended width
        and height is: 
        {window.innerWidth} x {window.innerHeight}.
        Based on current window's size.
      </p>
    </div>
  )

}

export default Form;
