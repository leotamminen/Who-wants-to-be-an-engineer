// GameWinner.js
import React from "react";

function GameWinner({ className }) {
  return (
    <div className={`game-over ${className}`}>
      <h1>Congrats! You are an Engineer!</h1>
    </div>
  );
}

export default GameWinner;
