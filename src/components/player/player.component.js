import React from "react";
import PlayerName from "../player-name/player-name.component";
import PlayerScore from "../player-score/player-score.component";

import "./player.styles.css";
const Player = ({ name, score, onScoreChange, onRemove }) => {
  return (
    <div className='player'>
      <PlayerName name={name} onRemove={onRemove} />
      <PlayerScore score={score} onScoreChange={onScoreChange} />
    </div>
  );
};

export default Player;
