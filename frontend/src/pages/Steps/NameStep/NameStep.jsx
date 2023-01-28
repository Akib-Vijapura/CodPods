import React from "react";

const NameStep = ({ onClickHandler }) => {
  return (
    <>
      <h1>NameStep</h1>
      <button onClick={onClickHandler}>Next</button>
    </>
  );
};

export default NameStep;
