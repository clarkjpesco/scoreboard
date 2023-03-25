import React from "react";

import "./player-name.styles.css";
const PlayerName = (props) => {
  const { name, onRemove } = props;

  return (
    <div className='player-name'>
      <a className='remove-player' onClick={onRemove}>
        x
      </a>
      {name}
    </div>
  );
};

export default PlayerName;
