import React from "react";
function Tool({ name, tool }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{tool}</p>
    </div>
  );
}

Tool.defaultProps = {
  name: "Designer",
  tool: "Adobe XD",
};

export default Tool;
