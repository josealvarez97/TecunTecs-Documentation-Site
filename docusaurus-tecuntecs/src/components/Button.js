import React from "react";
import styles from "./Calculator.module.css";

const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log("click");
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={styles.btn}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "#00b5a5",
};

export default Button;
