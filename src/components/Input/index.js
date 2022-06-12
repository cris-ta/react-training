import "./styles.css";
import React from "react";

function Input(props) {
  return (
    <div>
      <label className="form__label">
        {props.label__name}
        <input
          id={props.name}
          name={props.name}
          className="form__input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
}

function TextArea(props) {
  return (
    <div>
      <label className="form__label">
        {props.label__name}
        <textarea
          id={props.name}
          name={props.name}
          className="form__input"
          placeholder={props.placeholder}
        ></textarea>
      </label>
    </div>
  );
}

export { Input, TextArea };
