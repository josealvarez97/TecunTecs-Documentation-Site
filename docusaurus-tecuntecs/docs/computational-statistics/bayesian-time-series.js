import React from "react";

// a page parameter would be very powerful to separate
// parameters by page. some could be group in one page,
// and others such as the lists should have their own page
// in a carousel.
const paramInfo = [
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
      <p>{false && JSON.stringify(result)}</p>
      {"resultsZip" in result && (
        <p>
          Results ZIP File: <a href={result.resultsZip}>{result.resultsZip}</a>
        </p>
      )}
    </div>
  );
};

export { estimateEffectBPCausal, paramInfo, ResultContainer };
