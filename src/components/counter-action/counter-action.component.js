import React from "react";

import "./counter-action.styles.css";
const CounterAction = ({ type, symbol, handleClick }) => {
  return (
    <button className={`counter-action ${type}`} onClick={handleClick}>
      {symbol}
    </button>
  );
};

export default CounterAction;
