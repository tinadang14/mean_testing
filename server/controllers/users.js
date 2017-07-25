var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
    create: function(req, res){
        console.log('inside create of users.js' + req.body.question1)
        right = 0;
        for(let i=0; i<3; i++){
            key = `question${i+1}`;
            console.log(key);
            if(req.body[key] == "correct"){
                console.log("correct");
                right += 1;
            }else{
                console.log("incorrect");
            }
        }
        var user = new User();
        user.name = req.body.name
        if(right == 1){
            console.log('inside right ==1')
            user.score = "1/3"
            user.percent = 33.33
        }else if(right == 2){
            user.score = "2/3"
            user.percent = 66.66
        }else if(right ==3){
            user.score = "3/3"
            user.percent = 100
        }else{
           user.score = "0/3"
           user.percent = 0 
        }
        user.save().then((doc)=>{
            console.log('inside user.save')
            res.json(doc);
        }).catch((doc)=>{
            console.log('.catch for user')
            console.log(doc)
            res.json("false");
        })
    },
    all: function(req, res){
        console.log('helllooooo')
        User.find({}).sort({percent: -1, updatedAt: "desc"}).exec(function(err, users){
            if(err){
                console.log('errors')
                res.json("false");
            }else{
                console.log('found all users');
                res.json(users);
            }
        })
    }
}