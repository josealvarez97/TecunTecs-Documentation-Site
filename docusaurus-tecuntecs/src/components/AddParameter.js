import React, { useState } from "react";
import styles from "./Calculator.module.css";
// <p>{JSON.stringify(styles)}</p> // super useful
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

const AddParameter = ({ onCalculate }) => {
  const [f, setF] = useState("lambda t: 3*(t**2)*exp(t**3)");
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [n, setN] = useState(4);
  const [method, setMethod] = useState("trapezoidal");
  const [result, setResult] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await onCalculate({ f, a, b, n, method });
    setResult(result);
  };

  return (
    <form className={styles["add-form"]} onSubmit={onSubmit}>
      <div className={styles["form-control"]}>
        <label>
          <code>f</code>: Single variable function, a rate of change with
          respect to one variable.
          <BlockMath math="\frac{dx}{dt}=f(t)" />
        </label>
        <input
          type="text"
          placeholder="lambda t: 3*(t**2)*exp(t**3)"
          value={f}
          onChange={(e) => setF(e.target.value)}
        />
      </div>
      <div className={styles["form-control"]}>
        <label>
          <code>a</code>: Starting limit of integration.
          <BlockMath math="\int_{a}" />
        </label>
        <input
          type="text"
          placeholder="0"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div className={styles["form-control"]}>
        <label>
          {" "}
          <code>b</code>: Ending limit of integration.
          <BlockMath math="\int^{b}" />
        </label>
        <input
          type="text"
          placeholder="1"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className={styles["form-control"]}>
        <label>
          {" "}
          <code>n</code>: Number of steps for numerical approximation.
          <BlockMath math="\int_{a}^{b} f(t)dx \approx \sum ^{n-1}_{i=0} f(a + i\Delta x) \Delta x" />
          <BlockMath math="\Delta x = \frac{b-a}{n}" />
        </label>
        <input
          type="text"
          placeholder="4"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
      </div>
      <div className={styles["form-control"]}>
        <label>
          {" "}
          <code>method</code>: Algorithm for numerical integration (
          <code>trapezoidal</code> or <code>midpoint</code>).
          {method == "trapezoidal" && (
            <BlockMath math="\text{trapezoidal formula here}" />
          )}
          {method == "midpoint" && (
            <BlockMath math="\text{midpoint formula here}" />
          )}
        </label>
        <input
          type="text"
          placeholder="trapezoidal"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Calculate"
        className={`${styles["btn"]} ${styles["btn-block"]}`}
      />
      <div>
        <br></br>
        <h2>Result: </h2>
        <p>{"result" in result && result.result}</p>
      </div>
    </form>
  );
};

export default AddParameter;
