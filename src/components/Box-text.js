import React from "react";
import "../styles/Box-text.css";

const BoxText = ({ text }) => {
  return (
    <div className="box-container">
      <p>{text}</p>
    </div>
  );
};

export default BoxText;
