import React from "react";
import Stats from "../stats/stats.component";
import Stopwatch from "../stopwatch/stopwatch.component";
import "./header.styles.css";
const Header = ({ title, players }) => {
  return (
    <div className='header'>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </div>
  );
};

export default Header;
