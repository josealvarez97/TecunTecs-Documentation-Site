import React, { useState } from "react";
// Not scoped locally (can affect docusaurus rendering)
// import styles from "./Calculator.css";
// Scoped locally (really locally)
import styles from "./Calculator.module.css";
import Button from "./Button";
import Parameter from "./Parameter";
import AddParameter from "./AddParameter";

const calculateParameter = async (parameter) => {
  console.log("calculateParameter()");
  console.log(JSON.stringify(parameter));

  const res = await fetch(
    "https://tecuntecs-cloud-platform.appspot.com/integrate",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(parameter),
    }
  );

  const data = res.json();
  console.log(data);
  return data;
};

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("click");
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <AddParameter onCalculate={calculateParameter} />
    </div>
  );
};

// Header.defaultProps = {
//   title: "Default title",
// };

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
