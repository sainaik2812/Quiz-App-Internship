import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="button"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
