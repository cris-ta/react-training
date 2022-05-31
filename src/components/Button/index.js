import React from "react";
import "./styles.css"

function Button(props) {
  const { handleOnClick, text, type } = props;
  return (
    <button
      className={type === "primary" ? "btn-green" : "btn-red"}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
}

export default Button;
