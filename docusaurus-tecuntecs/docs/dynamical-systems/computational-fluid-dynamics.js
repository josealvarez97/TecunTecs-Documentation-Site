const paramInfo = [
  {
    name: "nt",
    description: "Number of steps.",
    type: "number",
    placeholder: 100,
  },
  {
    name: "viscosity",
    description: "Value of kinetic viscosity.",
    blockmath: "\\nu\\text{: kinetic viscosity}",
    type: "number",
    placeholder: 1,
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

export { solveCavityFlow2D, paramInfo };
