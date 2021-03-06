import React, { useState } from "react";
import styles from "./Calculator.module.css";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import ArrayParameter from "./ArrayParameter";

const CheckboxParameter = (props) => {};

const InputParameter = ({
  name,
  description,
  blockmath,
  inlinemath,
  type,
  placeholder,
  value,
  setValue,
  isArray,
  checked,
}) => {
  const getHandleInputChangeFunction = () => {
    if (type === "checkbox") return (e) => setValue(e.target.checked);
    else if (type === "number")
      return (e) => setValue(parseInt(e.target.value));
    else return (e) => setValue(e.target.value);
  };
  return (
    <div
      className={
        type != "checkbox"
          ? styles["form-control"]
          : styles["form-control-check"]
      }
    >
      <label>
        <code>{name}</code>: {description}
        {blockmath && !Array.isArray(blockmath) && (
          <BlockMath math={blockmath} />
        )}
        {blockmath &&
          Array.isArray(blockmath) &&
          blockmath.map((math) => <BlockMath math={math} />)}
      </label>
      {/*Potentially better way to handle input change https://reactjs.org/docs/forms.html */}

      {!isArray ? (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={getHandleInputChangeFunction()}
          id={name}
          name={name}
          checked={value}
        />
      ) : (
        <ArrayParameter
          arrayState={value}
          setArrayState={setValue}
          placeholder={placeholder}
          type={type}
        />
      )}
    </div>
  );
};

InputParameter.defaultProps = {
  isArray: false,
};

export default InputParameter;
