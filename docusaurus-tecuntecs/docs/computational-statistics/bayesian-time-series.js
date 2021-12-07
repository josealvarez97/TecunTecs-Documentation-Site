import React from "react";
// import ReactJson from "react-json-view";
// import BrowserOnly from "@docusaurus/BrowserOnly";
import { JsonView, darkStyles, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

// a page parameter would be very powerful to separate
// parameters by page. some could be group in one page,
// and others such as the lists should have their own page
// in a carousel.
const paramInfo = [
  {
    name: "dataset",
    description:
      "URL linking time-series cross-sectional data in csv format. (Learn to make your raw csv files available online https://youtu.be/jDaWna1IRmY.) ",
    type: " text",
    placeholder:
      "https://storage.googleapis.com/tcp-uniform-storage-bucket/simdata-bpCausal-PangEtAl2021.csv",
  },
  {
    name: "index",
    description: "Names for unit and time index",
    type: "text",
    isArray: true,
    placeholder: ["id", "time"],
  },
  {
    name: "Yname",
    description: "Outcome variable",
    type: "text",
    placeholder: "Y",
  },
  {
    name: "Dname",
    description: "Treatment indicator",
    type: "text",
    placeholder: "D",
  },
  {
    name: "Xname",
    description: "Covariates that have constant (fixed) effect",
    type: "text",
    isArray: true,
    placeholder: ["X1", "X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9"],
  },
  {
    name: "Zname",
    description: "Covariates that have unit-level random effect",
    type: "text",
    isArray: true,
    placeholder: ["X1", "X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9"],
  },
  {
    name: "Aname",
    description: "Covariates that have time-level random effect ",
    type: "text",
    isArray: true,
    placeholder: ["X1", "X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9"],
  },
  {
    name: "re",
    description: "Two-way random effect.",
    type: "text",
    placeholder: "both",
  },
  {
    name: "ar1",
    description:
      "Whether the time-level random effects is ar1 process or just multilevel (independent).",
    type: "checkbox",
    placeholder: true,
  },
  {
    name: "r",
    description: "Factor numbers",
    type: "number",
    placeholder: 10,
  },
  {
    name: "niter",
    description: "number of mcmc draws",
    type: "number",
    placeholder: 150,
  },
  {
    name: "burn",
    type: "number",
    placeholder: 50,
  },
  {
    name: "xlasso",
    type: "number",
    placeholder: 1,
  },
  {
    name: "zlasso",
    type: "number",
    placeholder: 1,
  },
  {
    name: "alasso",
    type: "number",
    placeholder: 1,
  },
  {
    name: "flasso",
    type: "number",
    placeholder: 1,
  },
  {
    name: "a1",
    type: "number",
    placeholder: 0.001,
  },
  {
    name: "a2",
    type: "number",
    placeholder: 0.001,
  },
  {
    name: "b1",
    type: "number",
    placeholder: 0.001,
  },
  {
    name: "b2",
    type: "number",
    placeholder: 0.001,
  },
  {
    name: "c1",
    type: "number",
    placeholder: 0.001,
  },
  {
    name: "c2",
    type: "number",
    placeholder: 0.001,
  },
  {
    name: "p1",
    type: "number",
    placeholder: 0.001,
  },
  {
    name: "p2",
    type: "number",
    placeholder: 0.001,
  },
];

const estimateEffectBPCausal = async (parameterSet) => {
  const res = await fetch(
    "https://api.tecuntecs.com/estimate-effect/bpCausal",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(parameterSet),
    }
  );

  const data = res.json();
  return data;
};

const ResultContainer = ({ result }) => {
  return (
    <div>
      <h2>Result:</h2>
      {"resultsZip" in result && (
        <p>
          Results ZIP File: <a href={result.resultsZip}>{result.resultsZip}</a>
        </p>
      )}
      {"ATT.png" in result && <img src={result["ATT.png"]} />}
      {"resultsZip" in result && (
        <JsonView
          data={result}
          shouldInitiallyExpand={(level) => true}
          style={darkStyles}
        />
      )}
    </div>
  );
};

// {"resultsZip" in result && (
//   <BrowserOnly fallback={<div>Loading...</div>}>
//     {() => {
//       // const ReactJson = require("react-json-view").ReactJson;
//       // return <ReactJson name={false} src={result} theme="monokai" />;
//       return <p>test</p>;
//     }}
//   </BrowserOnly>
// )}

export { estimateEffectBPCausal, paramInfo, ResultContainer };
