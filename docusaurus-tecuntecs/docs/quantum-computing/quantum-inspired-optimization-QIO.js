import React from "react";

const paramInfo = [
  {
    name: "partition_weights",
    description: "The weights to be assigned to every number",
    type: "number",
    isArray: true,
    placeholder: [1, 5, 9, 21, 35, 5, 3, 5, 10, 11],
  },
];

const optimizeNumberPartitionQIO = async (parameterSet) => {
  const res = await fetch(
    "https://api.tecuntecs.com/optimize-qio/number-partition",
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
  const largestPartition = (partitions) => {
    console.log("start largestPartition()");
    let largestPartition = [];
    console.log("partitions", partitions);
    for (let i = 0; i < partitions.length; i++) {
      if (partitions[i].length > largestPartition.length)
        largestPartition = partitions[i];
    }
    console.log("end largestPartition()", largestPartition);

    return largestPartition;
  };

  const tableRows = (partitions) => {
    console.log("start tableRows()");

    const largestLength = largestPartition(partitions).length;
    const rows = [];
    for (let i = 0; i < largestLength; i++) {
      const row = [];
      for (let j = 0; j < partitions.length; j++) {
        console.log("i", i, "j", j);
        if (i < partitions[j].length) row.push(partitions[j][i]);
      }
      rows.push(row);
    }
    console.log("end tableRows()", rows);

    return rows;
  };

  return (
    <div>
      <h2>Result:</h2>
      <p>{false && JSON.stringify(result)}</p>
      {"resultsZip" in result && (
        <p>
          Results ZIP File: <a href={result.resultsZip}>{result.resultsZip}</a>
        </p>
      )}
      {"resultsPng" in result && <img src={result.resultsPng} />}
      {"result" in result && (
        <table style={{ width: "100%" }}>
          <tr>
            <th>Partition A</th>
            <th>Partition B</th>
          </tr>
          {tableRows(result.result).map((row) => (
            <tr>
              {row.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export { optimizeNumberPartitionQIO, paramInfo, ResultContainer };
