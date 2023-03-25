import React from "react";

import "./counter-score.styles.css";
const CounterScore = ({ score }) => {
  return <div className='counter-score'>{score}</div>;
};

export default CounterScore;
