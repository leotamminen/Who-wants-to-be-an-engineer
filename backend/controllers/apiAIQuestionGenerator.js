const config = require('../utils/config');
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const MODEL_NAME = "models/text-bison-001";

const questionGenerator = async () => {
    const client = new TextServiceClient({
        authClient: new GoogleAuth().fromAPIKey(config.API_KEY),
    });
    const prompt = "Generate Who wants to be a millionaire question with one correct and three incorrect answers in JSON format.";
    // Return the promise from the client.generateText call
    return client.generateText({
        model: MODEL_NAME,
        prompt: {
            text: prompt,
        },
    }).then((result) => {
        console.log(JSON.stringify(result, null, 2));
        return result;
    });
};

module.exports = { questionGenerator };