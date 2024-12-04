import React from "react"
import "./form.css"

function Form({handleSubmit}) {
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label for="width">Width: </label>
          <input type="number" min="50" max="1000" name="width" id="width"/>
        </div>
        <div>
          <label  for="height">Height: </label>
          <input name="height" type="number" min="50" max="1000" id="height"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )

}


export default Form;
