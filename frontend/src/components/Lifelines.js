import { useState } from "react";
import lifelineService from "../services/lifelineService";

const Lifelines = ({
  isFiftyFiftyUsed,
  isAskFriendUsed,
  isAskAudienceUsed,
  isAskFriendBoxVisible,
  setIsAskFriendBoxVisible,
  isAudienceAnswerVisible,
  audienceAnswers,
  setIsLifelineUsageVisible,
  setLifeline,
  isAiAnswerVisible,
  setIsAiAnswerVisible
}) => {
  const [questionToFriend, setQuestionToFriend] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  const handleLifelineUse = (lifeline) => {
    setIsLifelineUsageVisible(true);
    setLifeline(lifeline)
  }

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

  const handleChange = (event) => {
    setQuestionToFriend(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleQuestionSend();
    }
  };

  return (
    <div className="lifelines">
      <button
        onClick={() => handleLifelineUse("fiftyFifty")}
        disabled={isFiftyFiftyUsed}
        className={isFiftyFiftyUsed ? "fiftyfifty-button disabled" : "fiftyfifty-button"}
      />
      <button
        onClick={() => handleLifelineUse("askFriend")}
        disabled={isAskFriendUsed}
        className={isAskFriendUsed ? "ask-friend-button disabled" : "ask-friend-button"}
      />
      <button
        onClick={() => handleLifelineUse("askAudience")}
        disabled={isAskAudienceUsed}
        className={isAskAudienceUsed ? "ask-audience-button disabled" : "ask-audience-button"}
      />
      <div className={isAskFriendBoxVisible ? "askFriendBoxContainer visible" : "askFriendBoxContainer"}>
        <textarea
          type="text"
          placeholder="Write here your question to friend"
          className="askFriendBox"
          value={questionToFriend}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleQuestionSend}
          className="ask-button"
        >
        Ask
        </button>
      </div>
      <div>
        <div className={isAiAnswerVisible ? "aiAnswerContainer visible" : "aiAnswerContainer"}>
          {aiAnswer}
        </div>
        <div className={isAudienceAnswerVisible ? "audienceAnswerContainer visible" : "audienceAnswerContainer"}>
        <p>Viewer 1: {audienceAnswers[0]}</p>
        <p>Viewer 2: {audienceAnswers[1]}</p>
        <p>Viewer 3: {audienceAnswers[2]}</p>        
        </div>
      </div>
    </div>
  );
}

export default Lifelines;