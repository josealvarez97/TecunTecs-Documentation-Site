import React from "react";
// import ReactJson from "react-json-view";
// import BrowserOnly from "@docusaurus/BrowserOnly";
// import useIsBrowser from "@docusaurus/useIsBrowser";
import { JsonView, darkStyles, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
const json = {
  a: 1,
  b: "example",
};
const JsonViewer = () => {
  return (
    <div>
      <JsonView
        data={json}
        shouldInitiallyExpand={(level) => true}
        style={defaultStyles}
      />
      <JsonView
        data={json}
        shouldInitiallyExpand={(level) => true}
        style={darkStyles}
      />
    </div>
  );
};

export default JsonViewer;

// <!-- Frill Widget (https://frill.co) -->
// <div data-frill-widget="d64d6407-8367-4fc0-b20b-43fe90a00548" style="width: 340px; height: 460px;"></div>
// <script async src="https://widget.frill.co/v2/widget.js"></script>
// <!-- End Frill Widget -->
