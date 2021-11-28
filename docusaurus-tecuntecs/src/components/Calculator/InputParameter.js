import React, { useState } from "react";
import styles from "./Calculator.module.css";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import ArrayParameter from "./ArrayParameter";

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
}) => {
  return (
    <div className={styles["form-control"]}>
      <label>
        <code>{name}</code>: {description}
        {blockmath && !Array.isArray(blockmath) && (
          <BlockMath math={blockmath} />
        )}
        {blockmath &&
          Array.isArray(blockmath) &&
          blockmath.map((math) => <BlockMath math={math} />)}
      </label>
      {!isArray ? (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
