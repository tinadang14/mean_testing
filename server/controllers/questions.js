var mongoose = require("mongoose");
var Question = mongoose.model("Question");

module.exports = {
    create: function(req, res){
        
        var question = new Question({
            content: req.body.content,
            correct: req.body.correct,
            wrong1: req.body.wrong1,
            wrong2: req.body.wrong2
        });
        question.save().then((quest)=>{
            console.log('saved question ${quest.content}')
            res.json(question);

        }).catch((quest)=>{
            console.log('catch!')
            res.json("false");
        })
    },
    all: function(req, res){
        console.log('inside all')
        Question.find({}).sort({createdAt: -1, updatedAt: "asc"}).exec(function(err, questions){
            if(err){
                console.log("errors");
                res.json("false");
            }else{
                console.log("yay!")
                res.json(questions);
            }
        })
    }
}
