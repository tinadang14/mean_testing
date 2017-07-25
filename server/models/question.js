var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 15
    },
    correct: {
        type: String,
        required: true
    },
    wrong1:{
        type: String,
        rquired: true
    },
    wrong2: {
        type: String,
        required: true
    }
}, {timestamps:true});

var Question = mongoose.model("Question", questionSchema);