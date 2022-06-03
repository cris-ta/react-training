import React from "react";
import "./styles.css"

function Button(props) {
  const { handleOnClick, text, type } = props;
  return (
    <button
      className={type === "orange" ? "btn-orange" : "btn-brown"}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
}

export default Button;
