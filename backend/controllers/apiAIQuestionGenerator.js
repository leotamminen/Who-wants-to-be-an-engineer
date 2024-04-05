const config = require("../utils/config");
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const MODEL_NAME = "models/text-bison-001";

const questionGenerator = async () => {
  const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(config.API_KEY),
  });
  const prompt =
    'Generate a question that is related to mathematics with one correct and three incorrect answers in the following JSON format { "question": "Your question here?", "answers": [ { "text": "Answer 1", "correct": false }, { "text": "Answer 2", "correct": false }, { "text": "Correct Answer", "correct": true }, { "text": "Answer 4", "correct": false } ] }';
  // Return the promise from the client.generateText call
  return client
    .generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    })
    .then((result) => {
      const output = result[0]?.candidates[0]?.output;
      const jsonContent = output.replace(/^```json\s*|\s*```$/g, '');
      const jsonObject = JSON.parse(jsonContent);
      return jsonObject;
    });
};

module.exports = { questionGenerator };
