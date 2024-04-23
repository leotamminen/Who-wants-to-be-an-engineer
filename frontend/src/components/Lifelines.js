import { useState } from "react";
import lifelineService from "../services/lifelineService";

const Lifelines = ({ question, handleFiftyFifty, isFiftyFiftyUsed }) => {
  const [isAskFriendBoxVisible, setIsAskFriendBoxVisible] = useState(false);
  const [questionToFriend, setQuestionToFriend] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [isAiAnswerVisible, setIsAiAnswerVisible] = useState(false);
  const [isAskFriendUsed, setIsAskFriendUsed] = useState(false);
  const [audienceAnswers, setAudienceAnswers] = useState([]);
  const [isAudienceAnswerVisible, setIsAudienceAnswerVisible] = useState(false);
  const [isAskAudienceUsed, setIsAskAudienceUsed] = useState(false);

  const handleAskFriend = () => {
    setIsAskFriendBoxVisible(true);
  };

  const handleQuestionSend = async () => {
    try {
      const response = await lifelineService.askFriend(questionToFriend);
      setAiAnswer(response.answer);
      setIsAiAnswerVisible(true);
    } catch (error) {
      console.error("Error asking friend:", error.message);
    }
    setQuestionToFriend("");
    setIsAskFriendBoxVisible(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleQuestionSend();
    }
  };

  const handleChange = (event) => {
    setQuestionToFriend(event.target.value);
  };

  const handleAskAudience = () => {
    console.log(question);
    const answers = [];
    for (let i = 0; i < 3; i++) {
      const probability = Math.random();
      if (probability >= 0.1) {
        const correctAnswer = question.answers.find(answer => answer.correct);
        answers.push(correctAnswer.text);
      } else {
        const incorrectAnswers = question.answers.filter(answer => !answer.correct);
        const incorrectAnswer = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
        answers.push(incorrectAnswer.text);
      }
    }
    setAudienceAnswers(answers);
    setIsAudienceAnswerVisible(true);
  }

  return (
    <div>
      <button onClick={handleFiftyFifty}>50:50</button>
      <button onClick={handleAskFriend}>Ask friend</button>
      <button onClick={handleAskAudience}>Ask audience</button>
      <div className={isAskFriendBoxVisible ? "askFriendBoxContainer visible" : "askFriendBoxContainer"}>
        <input
          type="text"
          placeholder="Write here your question to friend"
          className="askFriendBox"
          value={questionToFriend}
          onChange={handleChange}
          onKeyDown={handleKeyPress} // This makes sure enter key works also
        />
        <button onClick={handleQuestionSend}>OK</button>
      </div>
      <div>
        <div className={isAiAnswerVisible ? "aiAnswerContainer visible" : "aiAnswerContainer"}>
          {aiAnswer}
        </div>
        <div className={isAudienceAnswerVisible ? "audienceAnswerContainer visible" : "audienceAnswerContainer"}>
          Viewer 1 thinks the correct answer is {audienceAnswers[0]}, viewer 2 says {audienceAnswers[1]}, and viewer 3 thinks {audienceAnswers[2]} is the correct one
        </div>
      </div>
    </div>
  );
}

export default Lifelines;