import React, { useState } from "react";
import styles from "./Calculator.module.css";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

const InputParameter = ({
  name,
  description,
  blockmath,
  inlinemath,
  type,
  placeholder,
  value,
  onChange,
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
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputParameter;
