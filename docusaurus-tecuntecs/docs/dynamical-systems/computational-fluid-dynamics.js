import React, { useState } from "react";

const paramInfo = [
  {
    name: "density",
    description: "Value of density.",
    blockmath: "\\rho\\text{: density}",
    type: "number",
    placeholder: 1,
  },
  {
    name: "viscosity",
    description: "Value of kinetic viscosity.",
    blockmath: "\\nu\\text{: kinetic viscosity}",
    type: "number",
    placeholder: 0.1,
  },
  {
    name: "nt",
    description: "Number of steps.",
    type: "number",
    placeholder: 100,
  },
];

const solveCavityFlow2D = async (parameterSet) => {
  console.log("solveCavityFlow2D()");
  console.log(JSON.stringify(parameterSet));

  const res = await fetch(
    "https://api.tecuntecs.com/solve-cfd/cavity-flow-2d",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(parameterSet),
    }
  );

  const data = res.json();
  console.log(data);

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
      {"resultsPng" in result && <img src={result.resultsPng} />}
    </div>
  );
};

export { solveCavityFlow2D, paramInfo, ResultContainer };
