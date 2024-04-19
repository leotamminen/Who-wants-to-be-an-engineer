const config = require("../utils/config");
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const MODEL_NAME = "models/text-bison-001";

const categories = [
  'computer science',
  'engineering mathematics',
  'physics',
  'computer hardware',
  'programming',
  'digital communication',
  'cyber security',
  'data science',
  'engineering',
  'swedish language',
  'unix',
  'information security',
  'embedded systems',
  'IoT devices',
  'solid mechanics',
  'biotechnology',
  'materials technology',
  'english language',
  'electronics',
  'artificial intelligence',
  'databases',
  'algorithms',
  'calculus',
  'economics',
  'software development',
  'processor architecture',
  'automation technology',
  'thermodynamics',
  'machine learning',
  'large language models'
]

const questionGenerator = async () => {
  const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(config.API_KEY),
  });
  // Get random category from categories list
  const category = categories[Math.floor(Math.random() * categories.length)];
  const prompt =
    `Generate a question that is related to ${category} with one correct and three incorrect answers in the following JSON format { "question": "Your question here?", "answers": [ { "text": "Answer 1", "correct": false }, { "text": "Answer 2", "correct": false }, { "text": "Correct Answer", "correct": true }, { "text": "Answer 4", "correct": false } ] }`;
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
      console.log(output);
      if (output !== undefined && output !== null && output !== '') {
        const jsonContent = output.replace(/^```(?:json\s*)?|\s*```$/g, '');
        const jsonObject = JSON.parse(jsonContent);
        if (validateQuestion(jsonObject)) {
          return jsonObject;
        }
      }
    });
};

function validateQuestion(question) {
  if (
    question.question[question.question.length - 1] === '?' &&
    !question.answers[0].text.toLowerCase().includes('correct answer') &&
    !question.answers[1].text.toLowerCase().includes('correct answer') &&
    !question.answers[2].text.toLowerCase().includes('correct answer') &&
    !question.answers[3].text.toLowerCase().includes('correct answer')
  ) {
    console.log(question);
    return true;
  }
  return false;
}

module.exports = { questionGenerator };
