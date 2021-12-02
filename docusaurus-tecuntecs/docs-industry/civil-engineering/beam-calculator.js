import React, { useState } from "react";

const paramInfo = [
  {
    name: "f_c",
    description: "Concrete strength (concrete 3000 = 210, 4000 = 280).",
    blockmath:
      "f_c' \\hspace{0.5cm} \\left[\\frac{\\text{kg}}{\\text{cm}^2}\\right]",
    type: "number",
    placeholder: "210",
  },
  {
    name: "f_y",
    description: "Steel strength (degree 40 = 2810, degree 60 = 4200).",
    blockmath:
      "f'_y \\hspace{0.5cm} \\left[\\frac{\\text{kg}}{\\text{cm}^2}\\right]",
    type: "number",
    placeholder: "2810",
  },
  {
    name: "b",
    description: "Beam or slab width.",
    blockmath: "b \\hspace{0.5cm} [\\text{cm}]",
    type: "number",
    placeholder: "9",
  },
  {
    name: "h",
    description: "Beam height.",
    blockmath: "F_y \\hspace{0.5cm} [\\text{cm}]",
    type: "number",
    placeholder: "30",
  },
  {
    name: "c",
    description: "Beam cover.",
    blockmath: "c \\hspace{0.5cm} [\\text{cm}]",
    type: "number",
    placeholder: "2.5",
  },
  {
    name: "M",
    description: "Bending moment.",
    blockmath: "M \\hspace{0.5cm} [\\text{kg}\\times \\text{cm}]",
    type: "number",
    placeholder: "905",
  },
];

const calculateBeam = async (parameterSet) => {};

const ResultContainer = ({ result }) => {
  return (
    <div>
      <h2>Result:</h2>
      {"result" in result && <p>{result.result}</p>}
    </div>
  );
};

export { calculateBeam, paramInfo, ResultContainer };
