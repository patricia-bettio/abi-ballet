import React from "react";
import "./Button.css";

const COLOR = ["darkBtn", "greenBtn"];

export const Button = ({ children, type, onClick, buttonColor }) => {
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button className={`btn ${checkButtonColor}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
