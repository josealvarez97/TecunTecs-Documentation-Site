import React, { useState } from "react";
import { JsonView, darkStyles, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import ReactPlayer from "react-player";

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
    name: "u_top",
    description: "Velocity of the lid boundary.",
    blockmath: "u_{top}\\text{: lid velocity}",
    type: "number",
    placeholder: 8,
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
  console.log("parameterSet for cavity flow", JSON.stringify(parameterSet));

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
      {"FluidFlowAnimation.mp4" in result && (
        <ReactPlayer
          className="react-player fixed-bottom"
          url={result["FluidFlowAnimation.mp4"]}
          width="100%"
          height="100%"
          controls={true}
          playbackRate={0.25}
          loop={true}
          muted={true}
          playing={true}
        />
      )}
      {"cavity_flow.png" in result && <img src={result["cavity_flow.png"]} />}
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

export { solveCavityFlow2D, paramInfo, ResultContainer };
