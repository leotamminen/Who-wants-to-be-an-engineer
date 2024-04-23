// TODO:
// language en/fi select (?)
// darkmode switch (?)
// scoreboard (?)
// about page (?)
// difficulty select(?)
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import teekkarilakki from "./../assets/teekkarilakki.gif";

const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    const nameInput = inputRef.current.value.trim();
    if (!nameInput) {
      alert("Please input a name first");
      inputRef.current.value = "";
    } else {
      setName(nameInput);
      // consolelog name
      console.log("Name is:", nameInput);
    }
  };

  // Function for enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="username-container">
      <div className="input-button-container">
        <h1 className="start-h1">Who wants to be an engineer</h1>
        <img
          src={teekkarilakki}
          alt="Teekkari cap GIF"
          style={{ width: "150px", height: "150px" }}
        />

        <input
          type="text"
          placeholder="Engineer candidate name"
          ref={inputRef}
          className="username-box"
          onKeyDown={handleKeyPress}
        />
        <button className="username-button" onClick={handleClick}>
          Let's start!
        </button>
        <Link to="/about" className="about-button">
          About
        </Link>
      </div>
    </div>
  );
};

export default Start;
