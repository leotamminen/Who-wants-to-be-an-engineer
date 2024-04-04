const config = require("../utils/config");
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const MODEL_NAME = "models/text-bison-001";

const questionGenerator = async () => {
  const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(config.API_KEY),
  });
  const prompt =
    'Generate Who wants to be a millionaire question with one correct and three incorrect answers in the following JSON format { "_id": { "$oid": "660e12020e15d9f3a1b2addd" }, "question": "Your question here?", "answers": [ { "text": "Answer 1", "correct": false }, { "text": "Answer 2", "correct": false }, { "text": "Correct Answer", "correct": true }, { "text": "Answer 4", "correct": false } ], "difficulty": { "$numberInt": "X" } }';
  // Return the promise from the client.generateText call
  return client
    .generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    })
    .then((result) => {
      return result;
    });
};

module.exports = { questionGenerator };
