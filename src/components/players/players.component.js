import React from "react";
import Player from "../player/player.component";

import "./players.styles.css";
const Players = ({ players, onScoreChange, onRemove }) => {
  return (
    <div className='players'>
      {players.map((player, index) => {
        return (
          <Player
            key={player.id}
            {...player}
            onScoreChange={(delta) => onScoreChange(index, delta)}
            onRemove={() => onRemove(index)}
          />
        );
      })}
    </div>
  );
};

export default Players;
