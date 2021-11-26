import React from "react";

const paramInfo = [
  {
    name: "heat_x_0",
    description: "Boundary condition at x=0.",
    blockmath: "T(0, t) = T_0",
    type: "number",
    placeholder: 0,
  },
  {
    name: "heat_x_max",
    description: "Boundary condition at x=L.",
    blockmath: "T(L, t) = T_L",
    type: "number",
    placeholder: 0,
  },
  {
    name: "f_0",
    description: "Initial condition at t=0.",
    blockmath: "T(x, 0) = f_0(x)",
    type: "text",
    placeholder: "lambda x: sin(pi*x/1)",
  },
  {
    name: "alpha",
    description: "The termal diffusivity",
    blockmath: "\\alpha\\text{: termal diffusivity}",
    type: "number",
    placeholder: 0.1,
  },
  {
    name: "Nx",
    description: "number of mesh points in x direction",
    type: "number",
    placeholder: 20,
  },
  {
    name: "x_max",
    description: "maximum value of x domain",
    blockmath: "x_{max}=L",
    type: "number",
    placeholder: 1,
  },
  {
    name: "Mt",
    description: "number of time steps",
    type: "number",
    placeholder: 20,
  },
  {
    name: "t_max",
    description: "end time",
    type: "number",
    placeholder: 1,
  },
];

const solveHeatEquation = async (parameterSet) => {
  const res = await fetch("https://api.tecuntecs.com/solve-pde/heat-equation", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(parameterSet),
  });

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
      {"resultsPng" in result && <img src={result.resultsPng} />}
    </div>
  );
};

export { solveHeatEquation, paramInfo, ResultContainer };
