import { useState } from "react";
import lifelineService from "../services/lifelineService";

const Lifelines = () => {
  const [isAskFriendBoxVisible, setIsAskFriendBoxVisible] = useState(false);
  const [question, setQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [isAiAnswerVisible, setIsAiAnswerVisible] = useState(false);

  const handleAskFriend = () => {
    setIsAskFriendBoxVisible(true);
  };

  const handleQuestionSend = async () => {
    try {
      const response = await lifelineService.askFriend(question);
      setAiAnswer(response.answer);
      setIsAiAnswerVisible(true);
    } catch (error) {
      console.error("Error asking friend:", error.message);
    }
    setQuestion("");
    setIsAskFriendBoxVisible(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleQuestionSend();
    }
  };

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div>
      <button>50:50</button>
      <button onClick={handleAskFriend}>Ask friend</button>
      <button>Ask audience</button>
      <div className={isAskFriendBoxVisible ? "askFriendBoxContainer visible" : "askFriendBoxContainer"}>
        <input
          type="text"
          placeholder="Write here your question to friend"
          className="askFriendBox"
          value={question}
          onChange={handleChange}
          onKeyDown={handleKeyPress} // This makes sure enter key works also
        />
        <button onClick={handleQuestionSend}>OK</button>
        <div className={isAiAnswerVisible ? "aiAnswerContainer visible" : "aiAnswerContainer"}>
          {aiAnswer}
        </div>
      </div>
    </div>
  );
}

export default Lifelines;