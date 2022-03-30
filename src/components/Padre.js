import React, { useState } from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const initialValue = "Hello from Parent";
  const [parentValue, setParentValue] = useState(initialValue);

  const changeParentValue = (childValue) => {
    if (parentValue === childValue) {
      setParentValue(initialValue);
    }
    if (parentValue === initialValue) {
      setParentValue(childValue);
    }
  };

  return (
    <div className="parent-div">
      <h1>{parentValue}</h1>
      <Hijo changeParentValue={changeParentValue} />
    </div>
  );
};

export default Padre;
