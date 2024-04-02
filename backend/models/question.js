const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    answers: [{
        text: String,
        correct: Boolean
    }]
});

questionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Question', questionSchema);