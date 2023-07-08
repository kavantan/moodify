import React from "react";
import "../../styles/Mood/Mood_Notepad.css";

function Mood_Notepad(props) {
  return (
    <div className="Notepad">
      <div className="mb-3 notepad">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Pen down your thoughts..."
          rows="20"
          onChange={(e) => {
            props.setEntry(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default Mood_Notepad;
