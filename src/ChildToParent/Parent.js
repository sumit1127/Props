import { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [data, setData] = useState("");

  const childToParent = (x) => {
    setData(x);
  };

  return (
    <>
      {data}
      <div>
        <Child childToParent={childToParent} />
      </div>
    </>
  );
};
export default Parent;
