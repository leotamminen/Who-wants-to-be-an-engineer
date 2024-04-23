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
  setLifeline
}) => {
  const [questionToFriend, setQuestionToFriend] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [isAiAnswerVisible, setIsAiAnswerVisible] = useState(false);

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
    <div>
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
          onKeyDown={handleKeyPress} // This makes sure enter key works also
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
          Viewer 1 thinks the correct answer is {audienceAnswers[0]}, viewer 2 says {audienceAnswers[1]}, and viewer 3 thinks {audienceAnswers[2]} is the correct one
        </div>
      </div>
    </div>
  );
}

export default Lifelines;