//https://docusaurus.io/docs/creating-pages
import React from "react";
import Layout from "@theme/Layout";

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
            Hello world Jose!
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Hello;
