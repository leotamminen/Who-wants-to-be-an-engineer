// GameOver.js
import React from "react";
import { earnedMoney } from "../App";

function GameOver({ className, earnedMoney }) {
  // Function for refreshing the page when clicked "tästä".
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={className}>
      <h1>Game Over</h1>
      <h2>You earned {earnedMoney}</h2>
      <p>
        You can try again by pressing{" "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={refreshPage}
        >
          here
        </span>{" "}
        or by refreshing the page.
      </p>
    </div>
  );
}

export default GameOver;
