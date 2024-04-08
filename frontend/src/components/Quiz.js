import React, { useState, useEffect, useRef } from "react";
import Background_music from "../assets/Background_music.mp3";
import fiveToEight from "../assets/five-eight.mp3";
import eightToEleven from "../assets/eight-eleven.mp3";
import elevenToThirteen from "../assets/eleven-thirteen.mp3";
import fourteen from "../assets/fourteen.mp3";
import fifteen from "../assets/fifteen.mp3";
import millionaireRave from "../assets/MillionaireRave.mp3";
import apiQuestionService from "../services/apiQuestionService";
import dbQuestionService from "../services/dbQuestionService";

const Quiz = ({
  question,
  setQuestion,
  nextQuestion,
  setNextQuestion,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  handleBecomeMillionaire,
}) => {
  // const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [answersLocked, setAnswersLocked] = useState(false);

  // refs for various audio tracks
  const audioRefs = {
    backgroundMusic: useRef(new Audio(Background_music)),
    fiveToEight: useRef(new Audio(fiveToEight)),
    eightToEleven: useRef(new Audio(eightToEleven)),
    elevenToThirteen: useRef(new Audio(elevenToThirteen)),
    fourteen: useRef(new Audio(fourteen)),
    fifteen: useRef(new Audio(fifteen)),
    millionaireRave: useRef(new Audio(millionaireRave)),
    // TODO: add correct/incorrect sounds, maybe lock in answer
  };

  const playAudio = (audioRef) => {
    document.addEventListener("click", function playAudioOnInteraction() {
      Object.values(audioRefs).forEach((ref) => {
        if (ref.current !== audioRef.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      });

      audioRef.current.loop = true;
      audioRef.current.play();

      document.removeEventListener("click", playAudioOnInteraction);
    });
  };

  useEffect(() => {
    const {
      backgroundMusic,
      fiveToEight,
      eightToEleven,
      elevenToThirteen,
      fourteen,
      fifteen,
      millionaireRave,
    } = audioRefs;

    // Play specific songs for question numbers. Works fine for different rounds
    if (questionNumber < 6) {
      playAudio(backgroundMusic);
    } else if (questionNumber < 9) {
      playAudio(fiveToEight);
    } else if (questionNumber < 12) {
      playAudio(eightToEleven);
    } else if (questionNumber < 14) {
      playAudio(elevenToThirteen);
    } else if (questionNumber === 14) {
      playAudio(fourteen);
    } else if (questionNumber === 15) {
      playAudio(fifteen);
    } else if (questionNumber === 16) {
      playAudio(millionaireRave);
    }
  }, [questionNumber]);

  useEffect(() => {
    const fetchNextQuestion = async () => {
      const apiQuestion = await apiQuestionService.getQuestion(); // Fetch the next question from API
      if (apiQuestion) {
        console.log("api kysymys");
        setNextQuestion(apiQuestion); // Set the next question
      } else {
        console.log("db kysymys");
        const dbQuestion = await dbQuestionService.getQuestion(questionNumber + 1); // Fetch the next question from database
        if (dbQuestion) {
          setNextQuestion(dbQuestion); // Set the next question
        } else {
          console.log("shitty situation");
          // get question from question.js
        }
      }
    };

    fetchNextQuestion();
  }, [questionNumber]);

  // Update the current question when the question number changes
  // useEffect(() => {
  //   setQuestion(questions[questionNumber - 1]);
  // }, [questions, questionNumber]);

  // Delays the execution of a callback function for any given time
  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  // Call handleBecomeMillionaire function when becoming a millionaire
  if (questionNumber > 15) {
    handleBecomeMillionaire();
  }

  // Handles the click for answers
  const handleClick = (item) => {
    if (!answersLocked) {
      setSelectedAnswer((prevSelectedAnswer) =>
        prevSelectedAnswer === item ? null : item
      );
      setClassName("answer active");
      console.log("Selected answer:", selectedAnswer); // This works fine but the logging is "late"
    } else {
      console.log("Answers are locked!");
    }
  };

  // Handles the "Lock In Answer" button click
  const handleLockIn = () => {
    if (!selectedAnswer) {
      // Can not lock in if answer is not selected
      alert("You cant lock an answer if its not selected!");
      console.log("Select answer before locking in!");
    } else {
      if (!answersLocked) {
        // If no answer is locked in, lock the current selected answer
        setAnswersLocked(true); // Lock answers to prevent multiple clicks

        if (selectedAnswer) {
          // If an answer is selected
          // Set the className only for the selected answer with a 3-second delay for the main animation
          delay(3000, () => {
            setClassName(
              selectedAnswer.correct ? "answer correct" : "answer incorrect"
            );

            console.log("Selected Answer:", selectedAnswer);

            // If the locked-in answer is correct, move to the next question after 1 sec
            if (selectedAnswer.correct) {
              delay(1000, () => {
                setQuestion(nextQuestion);
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
                setClassName("answer");
                setAnswersLocked(false); // Unlock answers for the next question
              });
            } else {
              // If the locked-in answer is incorrect, reset className for the incorrect answer after 1 sec
              delay(1000, () => {
                setClassName("answer");
                setAnswersLocked(false); // Unlock answers for the next question
                console.log("Answer was wrong!!!!");
                // Set the timeOut state to true to trigger "game over" message
                setTimeOut(true);
              });
            }
          });
        }
      } else {
        // If answers are already locked, console log
        console.log("Answers are already locked!");
      }
    }
  };

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className={`answers ${answersLocked ? "answers-locked" : ""}`}>
        {question?.answers.map((item, index) => (
          <div
            key={index}
            className={`${
              answersLocked
                ? item === selectedAnswer
                  ? item.correct
                    ? "answer correct"
                    : "answer incorrect"
                  : "answer"
                : selectedAnswer === item
                ? "answer active"
                : "answer"
            }`}
            onClick={() => !answersLocked && handleClick(item)}
          >
            {item.text}
          </div>
        ))}
      </div>
      <button className="lock-in-button" onClick={handleLockIn}>
        Lock Answer
      </button>
    </div>
  );
};

export default Quiz;
