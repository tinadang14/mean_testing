var mongoose = require("mongoose");
const path = require("path");

questions = require("./../controllers/questions.js");
users = require("./../controllers/users.js");


// Routes
// Root Request
module.exports = function(app){

    app.get("/allQuestions", function(req, res){
        console.log("inside routes.js /allQuestions")
        questions.all(req, res);
    })

    app.post("/createQuestion", function(req, res){
        console.log("inside the express routing create question")
        questions.create(req, res);
    })

    app.post("/newUser", function(req, res){
        console.log("inside the express routing create user");
        users.create(req,res)
    })

     app.get("/allUsers", function(req, res){
        console.log("inside routes.js /allUsers")
        users.all(req, res);
    })

    app.get("/checkSession", function(req,res){
        //req.session.name="Timothy"
        console.log("inside check session routes.js");
        console.log(`this is req.body ${req.session.name}`)
        if(req.session.name){
            console.log(`inside the checksession if check ${req.session.name}`)
            res.json(req.session.name);
            console.log(`this is the response object ${res.json}`)
        }
        else{
            req.session.name="false"
            console.log("inside the checksession else")
            res.json(req.session.name)
        }
    })
    app.post("/setSession", function(req,res){
        req.session.name = req.body.name;
        console.log(`setting session to be ${req.body.name}`);
        res.json(req.body.name);
    })
    app.get("/endSession", function(req,res){
        req.session.destroy();
    })

    // app.post("/updateStatus", function(req,res){
    //     console.log("inside updateStatus")
    //     players.updateStatus(req,res);
    // })
    // app.post("/deletePlayer", function(req,res){
    //     console.log("inside delete player route.js")
    //     players.destroy(req,res);
    // })

    app.all("*", (req,res,next)=>{
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
 


}

