import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-h1">About</h1>
      <div className="about-content">
        <p className="about-p">
          This is a group project for the University of Turku course "DTEK2074
          Information Technology Labs". The project features a quiz game
          inspired by "Who Wants to Be a Millionaire", with the frontend built
          using React. A working version of the game is deployed to Vercel and
          can be played{" "}
          <a href="https://who-wants-to-be-an-engineer.vercel.app/">here</a>.
          Keep in mind that the current version is still under development and
          there can be (and are) unhandled errors.
        </p>
        <p className="about-p">
          {" "}
          <strong>License:</strong> This project is licensed under the{" "}
          <a href="/LICENSE">MIT License</a>.
          <p className="about-p">
            <a href="/">Back to the frontpage</a>.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
