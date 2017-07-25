import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { User } from "../user";
import { Router } from '@angular/router';

import { CommunicateService } from "../communicate.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  questions;
  allQuestions;
  user;
  sessionUser;
  constructor(private _httpService: HttpService, private router:Router, private _communicateService: CommunicateService) { 
    this.user = new User();
     this._communicateService.observedUser.subscribe(
      (updatedUser)=>{this.sessionUser = updatedUser;},
      (err)=>{},
      ()=>{}
    )

    this._httpService.allQuestions().then( result => { 
      //drop a for loop here to select 3 random questions
         let i = 0;
    while(i<3){
      let idx = Math.floor(Math.random()*result.length)
      if(result[idx]){
        this.questions.push(result[idx]);
        result[idx]=null;
        i++;
      }
      
    }
    this.allQuestions = result}).catch( err => { console.log(err); })
    this.sessionUser.lastGame.percentage="Nope"
    this.sessionUser.trivia="Nope";
    this.updateUser();
    this.questions = [];
 
  }

  ngOnInit() {}
  processPlay(){
    let score = 0;
    let percent = 0;
    if(this.user.question1 == "correct"){score+=1}if(this.user.question2=="correct"){score+=1}if(this.user.question3=="correct"){score+=1}
    if(score == 1){percent = 33.33}if(score == 2){percent = 66.66}if(score==3){percent = 100}
    console.log(this.user);
    this.user.name = this.sessionUser.name;
    console.log(`this.user.score = ${score}`)
    let stringScore = `${score}/3`;
    this.sessionUser.lastGame = {score:stringScore, percent:percent}
    this.sessionUser.trivia = "Nope";
    this.updateUser();
    console.log(`some stuff about session user... ${this.sessionUser.lastGame}`)
    console.log('this user is' + this.user);
    this._httpService.newUser(this.user);
    this.router.navigate(["/landing"]);
  }
  updateUser(){
    //{name:"", lastGame:{score:"",percentage:""}}
    this._communicateService.updateUser(this.sessionUser);
    console.log(`updating sessionUser = ${this.sessionUser.name}, ${this.sessionUser.lastGame.score}, ${this.sessionUser.trivia}`)
  }
  endSession(){
    
  }

}
