import React from "react";
import ScriptTag from "react-script-tag";

const FrillEmbeddedWidget = () => {
  return (
    <div>
      <div
        data-frill-widget="d64d6407-8367-4fc0-b20b-43fe90a00548"
        style={{ width: "100%", height: "460px" }}
      ></div>
      <ScriptTag async src="https://widget.frill.co/v2/widget.js" />
    </div>
  );
};

export default FrillEmbeddedWidget;

// <!-- Frill Widget (https://frill.co) -->
// <div data-frill-widget="d64d6407-8367-4fc0-b20b-43fe90a00548" style="width: 340px; height: 460px;"></div>
// <script async src="https://widget.frill.co/v2/widget.js"></script>
// <!-- End Frill Widget -->
