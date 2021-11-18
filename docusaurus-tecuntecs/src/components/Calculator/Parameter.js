import React, { useState } from "react";
import styles from "./Calculator.module.css";
// import styles2 from "./Calculator.css";

const Parameter = ({ task }) => {
  return (
    <div className={styles.task}>
      <h3>My Parameter Title</h3>
      <p>My parameter short comment</p>
    </div>
  );
};

export default Parameter;
