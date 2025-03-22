const Child = ({ childToParent }) => {
  const data = "This is data from Child Component to Parent";
  return (
    <>
      <div>
        <button onClick={() => childToParent(data)}>click</button>
      </div>
    </>
  );
};

export default Child;
