import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GameOver from "./components/GameOver";
import GameWinner from "./components/GameWinner";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import { studyPoints, questions } from "./questions";
import Start from "./components/Start";
import Lifelines from "./components/Lifelines";
import About from "./components/About"; // Import the About component

import apiQuestionService from "./services/apiQuestionService";
import dbQuestionService from "./services/dbQuestionService";
import LifelineUsageConfirmation from "./components/LifelineUsageConfirmation";

function App() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [answersLocked, setAnswersLocked] = useState(false);
  const [isMillionaire, setIsMillionaire] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("0 €");
  const question = useRef(null);
  const nextQuestion = useRef(null);
  const [, forceUpdate] = useState();

  const [isFiftyFiftyUsed, setIsFiftyFiftyUsed] = useState(false);
  const [isAskFriendUsed, setIsAskFriendUsed] = useState(false);
  const [isAskAudienceUsed, setIsAskAudienceUsed] = useState(false);

  const [isLifelineUsageVisible, setIsLifelineUsageVisible] = useState(false);
  const [isAskFriendBoxVisible, setIsAskFriendBoxVisible] = useState(false);
  const [audienceAnswers, setAudienceAnswers] = useState([]);
  const [isAudienceAnswerVisible, setIsAudienceAnswerVisible] = useState(false);
  const [lifeline, setLifeline] = useState("");

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
        dbQuestionService.getQuestion(1).then((dbQuestion) => {
          if (dbQuestion) {
            console.log("db kysymys");
            question.current = dbQuestion;
          } else {
            console.log("hard coded question");
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

  const handleLifelineUsageConfirmation = () => {
    setIsLifelineUsageVisible(false);
    executeLifeline(lifeline);
  };

  const handleLifelineUsageCancel = () => {
    setIsLifelineUsageVisible(false);
  };

  const executeLifeline = (lifeline) => {
    switch (lifeline) {
      case "fiftyFifty":
        setIsFiftyFiftyUsed(true);
        if (question.current) {
          const numbers = [0, 1, 2];
          const randomNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
          numbers.splice(randomNumber1, 1);
          const randomNumber2 =
            numbers[Math.floor(Math.random() * (numbers.length - 1))];
    
          const incorrectAnswers = question.current.answers.filter(
            (answer) => !answer.correct
          );
          if (incorrectAnswers) {
            incorrectAnswers[randomNumber1].text = "";
            incorrectAnswers[randomNumber2].text = "";
          }
    
          forceUpdate({});
        }
        break;

      case "askFriend":
        setIsAskFriendUsed(true);
        setIsAskFriendBoxVisible(true);
        break;

      case "askAudience":
        setIsAskAudienceUsed(true);
        const answers = [];
        for (let i = 0; i < 3; i++) {
          const probability = Math.random();
          if (probability >= 0.1) {
            const correctAnswer = question.current.answers.find(answer => answer.correct);
            answers.push(correctAnswer.text);
          } else {
            const incorrectAnswers = question.current.answers.filter(answer => !answer.correct);
            const incorrectAnswer = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
            answers.push(incorrectAnswer.text);
          }
        }
        setAudienceAnswers(answers);
        setIsAudienceAnswerVisible(true);
        break;
      
      default:
        break;
    }
  }

  // Only render the game content if the name is provided
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            name ? (
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
                    <div className="lifelines">
                      <Lifelines
                        isFiftyFiftyUsed={isFiftyFiftyUsed}
                        isAskFriendUsed={isAskFriendUsed}
                        isAskAudienceUsed={isAskAudienceUsed}
                        isAskFriendBoxVisible={isAskFriendBoxVisible}
                        setIsAskFriendBoxVisible={setIsAskFriendBoxVisible}
                        isAudienceAnswerVisible={isAudienceAnswerVisible}
                        audienceAnswers={audienceAnswers}
                        setIsLifelineUsageVisible={setIsLifelineUsageVisible}
                        setLifeline={setLifeline}
                      />
                    </div>
                  </div>
                  <div className={isLifelineUsageVisible ? "lifeline-usage-container visible" : "lifeline-usage-container"}>
                    <LifelineUsageConfirmation
                      handleLifelineUsageConfirmation={handleLifelineUsageConfirmation}
                      handleLifelineUsageCancel={handleLifelineUsageCancel}
                    />
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
                {name && (
                  <div className="money-container">
                    <ul className="money-list">
                      {studyPoints.map((item) => (
                        <li
                          key={item.id}
                          className={
                            questionNumber === item.id ? "item active" : ""
                          }
                        >
                          <h5 className="amount">{item.amount}</h5>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Start setName={setName} setTimeOut={setTimeOut} />
            )
          }
        />
        <Route path="/about" element={<About />} />{" "}
        {/* Route for the About page */}
      </Routes>
    </div>
  );
}

export default App;
