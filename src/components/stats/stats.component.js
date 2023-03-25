import React from "react";
import "./stats.styles.css";
const Stats = ({ players }) => {
  let totalPlayers = players.length;
  let totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  return (
    <table className='stats'>
      <thead></thead>
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
