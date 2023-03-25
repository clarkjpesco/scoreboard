import React from "react";

import Counter from "../counter/counter.component";
import "./player-score.styles.css";
const PlayerScore = (props) => {
  return (
    <div className='player-score'>
      <Counter score={props.score} onChange={props.onScoreChange} />
    </div>
  );
};

export default PlayerScore;
