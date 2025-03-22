import Child from "./Child";
import { useState } from "react";

const Parent = () => {
  const [data, setData] = useState(" ");

  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  };

  return (
    <div>
      <Child parentToChild={data} />
      <button onClick={() => parentToChild()}>Click here</button>
    </div>
  );
};

export default Parent;
