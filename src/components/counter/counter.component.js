import React from "react";
import CounterAction from "../counter-action/counter-action.component";
import CounterScore from "../counter-score/counter-score.component";
import { Component } from "react";

import "./counter.styles.css";

const Counter = (props) => {
  return (
    <div className='counter'>
      <CounterAction
        type='decrement'
        symbol='-'
        handleClick={() => props.onChange(-1)}
      />
      <CounterScore score={props.score} />
      <CounterAction
        type='increment'
        symbol='+'
        handleClick={() => props.onChange(1)}
      />
    </div>
  );
};

export default Counter;
