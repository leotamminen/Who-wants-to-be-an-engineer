// TODO start screen with possibly login or name, difficulty select(?)
import React, { useRef } from "react";

const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    inputRef.current.value && setName(inputRef.current.value);
  };

  return (
    <div className="username-container">
      <h1 className="start-h1">Who wants to be an engineer</h1>

      <input
        type="text"
        placeholder="Give your engineer candidate name"
        ref={inputRef}
        className="username-box"
      />
      <button className="username-button" onClick={handleClick}>
        Let's start!{" "}
      </button>
    </div>
  );
};

export default Start;
