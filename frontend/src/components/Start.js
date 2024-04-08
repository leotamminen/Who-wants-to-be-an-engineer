// TODO:
// language en/fi select (?)
// darkmode switch (?)
// scoreboard (?)
// about page (?)
// difficulty select(?)
import React, { useRef } from "react";

const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    const nameInput = inputRef.current.value.trim(); // Trim any extra spaces from name
    if (!nameInput) {
      alert("Please input a name first");
      inputRef.current.value = ""; // Clear input box if it is empty or just spaces
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
        <input
          type="text"
          placeholder="Engineer candidate name"
          ref={inputRef}
          className="username-box"
          onKeyDown={handleKeyPress} // This makes sure enter key works also
        />
        <button className="username-button" onClick={handleClick}>
          Let's start!
        </button>
      </div>
    </div>
  );
};

export default Start;
