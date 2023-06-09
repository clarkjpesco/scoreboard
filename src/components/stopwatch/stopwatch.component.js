import React from "react";
import { Component } from "react";

import "./stopwatch.styles.css";

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      running: false,
      elapsedTime: 0,
      previousTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick, 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTick = () => {
    if (this.state.running) {
      let now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
      });
    }

    console.log("onTick");
  };

  onStart = () => {
    this.setState({ running: true, previousTime: Date.now() });
  };

  onStop = () => {
    this.setState({ running: false });
  };

  onReset = () => {
    this.setState({ elapsedTime: 0, previousTime: Date.now() });
  };

  render() {
    const { running, elapsedTime } = this.state;
    let seconds = Math.floor(elapsedTime / 1000);

    return (
      <div className='stopwatch'>
        <h2>Stopwatch</h2>
        <div className='stopwatch-time'>{seconds}</div>
        {running ? (
          <button onClick={this.onStop}>Stop</button>
        ) : (
          <button onClick={this.onStart}>Start</button>
        )}
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
