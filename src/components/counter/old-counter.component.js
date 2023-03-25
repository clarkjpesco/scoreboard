import React from "react";
import CounterAction from "../counter-action/counter-action.component";
import CounterScore from "../counter-score/counter-score.component";
import { Component } from "react";

import "./counter.styles.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: this.props.score,
    };
  }

  incrementScore = () => {
    this.setState((prevState, prevProps) => {
      return { score: prevState.score + 1 };
    });
  };
  decrementScore = () => {
    this.setState((prevState, prevProps) => {
      return { score: prevState.score - 1 };
    });
  };

  render() {
    return (
      <div className='counter'>
        <CounterAction
          type='decrement'
          symbol='-'
          handleClick={this.decrementScore}
        />
        <CounterScore score={this.state.score} />
        <CounterAction
          type='increment'
          symbol='+'
          handleClick={this.incrementScore}
        />
      </div>
    );
  }
}

export default Counter;
