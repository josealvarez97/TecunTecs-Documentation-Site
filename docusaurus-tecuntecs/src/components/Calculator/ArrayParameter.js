import React, { useState } from "react";
import styles from "./Calculator.module.css";

const ArrayParameter = ({ arrayState, setArrayState, placeholder, type }) => {
  console.log("arrayState", arrayState);

  const updateArrayState = (index, newItemValue) => {
    console.log("index", index, "newItemValue", parseInt(newItemValue));
    console.log(arrayState);
    arrayState[index] = parseInt(newItemValue);
    arrayState = [...arrayState];
    console.log(arrayState);
    // https://github.com/facebook/react/issues/19780
    setArrayState(arrayState);
  };

  const pushToArray = () => {
    arrayState.push(0);
    arrayState = [...arrayState];
    setArrayState(arrayState);
  };

  const removeFromArray = () => {
    arrayState = [...arrayState.slice(0, -1)];
    setArrayState(arrayState);
  };

  return (
    <div>
      <div className={styles["form-control"]}>
        {arrayState.map((item, i) => (
          <input
            key={i}
            type={type}
            placeholder={placeholder[i]}
            value={arrayState[i]}
            onChange={(e) => updateArrayState(i, parseInt(e.target.value))}
          />
        ))}
        <button
          style={{ backgroundColor: "#808080", width: "100%" }}
          className={styles.btn}
          onClick={pushToArray}
        >
          Add field
        </button>
        <button
          style={{ backgroundColor: "#808080", width: "100%" }}
          className={styles.btn}
          onClick={removeFromArray}
        >
          Remove field
        </button>
      </div>
    </div>
  );
};

export default ArrayParameter;
