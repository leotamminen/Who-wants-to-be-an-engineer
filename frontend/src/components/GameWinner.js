// GameWinner.js
import React from "react";
import engineerDancing from "./../assets/engineer_dancing.gif";

function GameWinner({ className }) {
  return (
    <div className={`game-over ${className}`}>
      <h1>Congrats! You are an Engineer!</h1>
      <img src={engineerDancing} alt="Celebration GIF" />
    </div>
  );
}

export default GameWinner;
