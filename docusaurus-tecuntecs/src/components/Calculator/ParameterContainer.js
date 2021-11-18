import React, { useState } from "react";
import styles from "./Calculator.module.css";
// <p>{JSON.stringify(styles)}</p> // super useful
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import InputParameter from "./InputParameter";

const ParameterContainer = ({ onCalculate, paramInfo }) => {
  let paramDict = {};
  let setParamDict = {};

  console.log(paramInfo);
  paramInfo.forEach((info) => {
    // console.log(`This is a child ${child.key}`);
    // console.log(child.props.placeholder);
    const [param, setParam] = useState(info.placeholder);
    console.log("before", paramDict);
    paramDict[info.name] = param;
    setParamDict[info.name] = setParam;
    console.log("after", paramDict);
    console.log(setParamDict);
    console.log("blockmath", info.blockmath);
    // child.value={param};
    // child.onChange = (e) => setParam(e.target.value)
  });

  // console.log(`Let's stringify stuff ${JSON.stringify(parameterSet)}`)

  // const [f, setF] = useState("lambda t: 3*(t**2)*exp(t**3)");
  // const [a, setA] = useState(0);
  // const [b, setB] = useState(1);
  // const [n, setN] = useState(4);
  // const [method, setMethod] = useState("trapezoidal");
  const [result, setResult] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    // const result = await onCalculate({ f, a, b, n, method });
    const result = await onCalculate(paramDict);
    setResult(result);
  };

  return (
    <form className={styles["add-form"]} onSubmit={onSubmit}>
      {paramInfo.map((info) => (
        <InputParameter
          key={info.name}
          name={info.name}
          description={info.description}
          blockmath={info.blockmath}
          type={info.type}
          placeholder={info.placeholder}
          value={paramDict[info.name]}
          onChange={(e) => setParamDict[info.name](e.target.value)}
        />
      ))}
      <input
        type="submit"
        value="Calculate"
        className={`${styles["btn"]} ${styles["btn-block"]}`}
      />
      <div>
        <br></br>
        <h2>Result: </h2>
        <p>{"result" in result && result.result}</p>
        <p>
          {"data" in result && <strong>{JSON.stringify(result.data)}</strong>}
        </p>
        <p>{"resultsZip" in result && result.resultsZip}</p>
        <p>{"resultsPng" in result && result.resultsPng}</p>
        {"data" in result && <img src={result.data.resultsPng} />}
      </div>
    </form>
  );
};

export default ParameterContainer;

// <div className={styles["form-control"]}>
//   <label>
//     <code>f</code>: Single variable function, a rate of change with
//     respect to one variable.
//     <BlockMath math="\frac{dx}{dt}=f(t)" />
//   </label>
//   <input
//     type="text"
//     placeholder="lambda t: 3*(t**2)*exp(t**3)"
//     value={f}
//     onChange={(e) => setF(e.target.value)}
//   />
// </div>
// <div className={styles["form-control"]}>
//   <label>
//     <code>a</code>: Starting limit of integration.
//     <BlockMath math="\int_{a}" />
//   </label>
//   <input
//     type="text"
//     placeholder="0"
//     value={a}
//     onChange={(e) => setA(e.target.value)}
//   />
// </div>
// <div className={styles["form-control"]}>
//   <label>
//     {" "}
//     <code>b</code>: Ending limit of integration.
//     <BlockMath math="\int^{b}" />
//   </label>
//   <input
//     type="text"
//     placeholder="1"
//     value={b}
//     onChange={(e) => setB(e.target.value)}
//   />
// </div>
// <div className={styles["form-control"]}>
//   <label>
//     {" "}
//     <code>n</code>: Number of steps for numerical approximation.
//     <BlockMath math="\int_{a}^{b} f(t)dx \approx \sum ^{n-1}_{i=0} f(a + i\Delta x) \Delta x" />
//     <BlockMath math="\Delta x = \frac{b-a}{n}" />
//   </label>
//   <input
//     type="text"
//     placeholder="4"
//     value={n}
//     onChange={(e) => setN(e.target.value)}
//   />
// </div>
// <div className={styles["form-control"]}>
//   <label>
//     {" "}
//     <p>
//       <code>method</code>: Algorithm for numerical integration (
//       <code>trapezoidal</code> or <code>midpoint</code>).
//     </p>
//     {method == "trapezoidal" && (
//       <div>
//         {/*<BlockMath math="\text{trapezoidal formula here}" />*/}
//         <img
//           src="https://api.tecuntecs.com/archive/Trapezoidal-Rule-TecunTecs.gif"
//           alt="Trapezoidal Rule GIF"
//         />
//       </div>
//     )}
//     {method == "midpoint" && (
//       <BlockMath math="\text{midpoint formula here}" />
//     )}
//   </label>
//   <input
//     type="text"
//     placeholder="trapezoidal"
//     value={method}
//     onChange={(e) => setMethod(e.target.value)}
//   />
// </div>
