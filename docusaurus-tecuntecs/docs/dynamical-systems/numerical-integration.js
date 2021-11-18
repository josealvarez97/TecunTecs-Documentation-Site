const paramInfo = [
  {
    name: "f",
    description:
      "Single variable function, a rate of change with respect to one variable.",
    blockmath: "\\frac{dx}{dt}=f(t)",
    type: "text",
    placeholder: "lambda t: 3*(t**2)*exp(t**3)",
  },
  {
    name: "a",
    description: "Starting limit of integration.",
    blockmath: `\\int_{a}`,
    type: "number",
    placeholder: 0,
  },
  {
    name: "b",
    description: "Ending limit of integration.",
    blockmath: "\\int^{b}",
    type: "number",
    placeholder: 1,
  },
  {
    name: "n",
    description: "Number of steps for numerical approximation.",
    blockmath: [
      "\\int_{a}^{b} f(t)dx \\approx \\sum ^{n-1}_{i=0} f(a + i\\Delta x) \\Delta x",
      "\\Delta x = \\frac{b-a}{n}",
    ],
    type: "number",
    placeholder: 4,
  },
  {
    name: "method",
    description:
      "Algorithm for numerical integration (`trapezoidal` or `midpoint`).",
    type: "text",
    placeholder: "trapezoidal",
  },
];

const integrate = async (parameterSet) => {
  console.log("calculateParameter()");
  console.log(JSON.stringify(parameterSet));

  const res = await fetch("https://api.tecuntecs.com/integrate", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(parameterSet),
  });

  const data = res.json();
  console.log(data);
  return data;
};

export { integrate, paramInfo };
