import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import GameOver from "./components/GameOver";
import GameWinner from "./components/GameWinner";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import { studyPoints, questions } from "./questions";
import Start from "./components/Start";
import Lifelines from "./components/Lifelines";

import apiQuestionService from "./services/apiQuestionService";
import dbQuestionService from "./services/dbQuestionService";

function App() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [answersLocked, setAnswersLocked] = useState(false);
  const [isMillionaire, setIsMillionaire] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("0 €");
  const question = useRef(null);
  const nextQuestion = useRef(null);

  // Update earned money when the question number changes
  useEffect(() => {
    // only start tracking after player got through first question
    questionNumber > 1 &&
      setEarnedMoney(
        studyPoints.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  useEffect(() => {
    // Fetct question from API
    apiQuestionService.getQuestion().then((apiQuestion) => {
      if (apiQuestion) {
        console.log("api kysymys");
        question.current = apiQuestion;
      } else {
        // Fetch question from database
        dbQuestionService
          .getQuestion(1)
          .then((dbQuestion) => {
            if (dbQuestion) {
              console.log("db kysymys");
              question.current = dbQuestion;
            } else {
              console.log("hard coded question")
              // Get question from questions.js
              question.current = questions[0];
            }
          });
      }
    });
  }, []);

  // Define a function to update isMillionaire state
  const handleBecomeMillionaire = () => {
    setIsMillionaire(true);
  };

  // Only render the game content if the name is provided
  return (
    <div className="App">
      {name ? (
        <>
          <div className="game-container">
            <div className="timer-container">
              <div className="timer">
                <Timer
                  setTimeOut={setTimeOut}
                  questionNumber={questionNumber}
                  answersLocked={answersLocked}
                />
              </div>
            </div>
            <div>
              <Lifelines />
            </div>
            <div className="game">
              {timeOut ? (
                <GameOver
                  className="game-over"
                  earnedMoney={earnedMoney}
                  name={name}
                />
              ) : isMillionaire ? (
                <GameWinner className="game-over" />
              ) : (
                <Quiz
                  question={question}
                  nextQuestion={nextQuestion}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setTimeOut={setTimeOut}
                  setAnswersLocked={setAnswersLocked}
                  handleBecomeMillionaire={handleBecomeMillionaire}
                />
              )}
            </div>
          </div>
          <div className="money-container">
            <ul className="money-list">
              {studyPoints.map((item) => (
                <li
                  key={item.id}
                  className={
                    questionNumber === item.id ? "item active" : "item"
                  }
                >
                  <h5 className="amount">{item.amount}</h5>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setName={setName} setTimeOut={setTimeOut} />
      )}
    </div>
  );
}

export default App;
