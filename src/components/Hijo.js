import React from "react";

const Hijo = ({ changeParentValue }) => {
  return (
    <div>
      <button onClick={() => changeParentValue("Hello from Child")}>
        Change Parent Data
      </button>
    </div>
  );
};

export default Hijo;
