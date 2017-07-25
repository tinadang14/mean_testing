var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        score: {
            type: String
        },
        percent: {
            type: Number
        }
}, {timestamps:true});

var User = mongoose.model("User", userSchema);