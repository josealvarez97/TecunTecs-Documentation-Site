import React, { useState } from "react";

const paramInfo = [
  {
    name: "fc",
    description: "Concrete strength (concrete 3000 = 210, 4000 = 280).",
    blockmath:
      "fc' \\hspace{0.5cm} \\left[\\frac{\\text{kg}}{\\text{cm}^2}\\right]",
    type: "number",
    placeholder: 210,
  },
  {
    name: "fy",
    description: "Steel strength (degree 40 = 2810, degree 60 = 4200).",
    blockmath:
      "fy \\hspace{0.5cm} \\left[\\frac{\\text{kg}}{\\text{cm}^2}\\right]",
    type: "number",
    placeholder: 2810,
  },
  {
    name: "b",
    description: "Beam or slab width.",
    blockmath: "b \\hspace{0.5cm} [\\text{cm}]",
    type: "number",
    placeholder: 9,
  },
  {
    name: "h",
    description: "Beam height.",
    blockmath: "h \\hspace{0.5cm} [\\text{cm}]",
    type: "number",
    placeholder: 30,
  },
  {
    name: "c",
    description: "Beam cover.",
    blockmath: "c \\hspace{0.5cm} [\\text{cm}]",
    type: "number",
    placeholder: 2.5,
  },
  {
    name: "M",
    description: "Bending moment.",
    blockmath: "M \\hspace{0.5cm} [\\text{kg}\\times \\text{cm}]",
    type: "number",
    placeholder: 905,
  },
];

const calculateBeam = async (parameterSet) => {
  const res = await fetch(
    "https://api.tecuntecs.com/calculate-beam/steel-area",
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

import { InlineMath, BlockMath } from "react-katex";

const ResultContainer = ({ result }) => {
  return (
    <div>
      <h2>Result:</h2>
      <h3>
        Effective cover (d): <InlineMath math={"[\\text{cm}]"} />
      </h3>
      {"d" in result && <p>{result.d}</p>}
      <h3>
        Area of steel (As): <InlineMath math={"[\\text{cm}^2]"} />
      </h3>
      {"As" in result && <p>{result.As}</p>}
      <h3>(Asmin):</h3>
      {"Asmin" in result && <p>{result.Asmin}</p>}
      <h3>(Asmax):</h3>
      {"Asmax" in result && <p>{result.Asmax}</p>}
      <h3>(pBal):</h3>
      {"pBal" in result && <p>{result.pBal}</p>}
    </div>
  );
};

export { calculateBeam, paramInfo, ResultContainer };
