import { Component, OnInit } from '@angular/core';
import { Question } from "../question";

import { Router } from '@angular/router';
import { HttpService } from "../http.service";
import { CommunicateService } from "../communicate.service";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  question;
  sessionUser;
  constructor(private _httpService:HttpService, private router:Router, private _communicateService: CommunicateService) {
    this.question = new Question();
     console.log("in the landing constructor")
    this._communicateService.observedUser.subscribe(
      (updatedUser)=>{this.sessionUser = updatedUser;},
      (err)=>{},
      ()=>{}
    )
    this.sessionUser.lastGame.percentage="Nope"
    this.sessionUser.trivia="Nope";
    this.updateUser();
    console.log(`and the sessionUser is ${this.sessionUser.name}`)
  }
  ngOnInit() {}
  Process(){
    console.log("inside create-question-component");
    this._httpService.newQuestion(this.question);
    this.sessionUser.trivia=true;
    this.sessionUser.lastGame.percentage="Nope"
    this.updateUser();
    this.router.navigate(["/landing"]);
  }
updateUser(){
    //{name:"", lastGame:{score:"",percentage:""}}
    this._communicateService.updateUser(this.sessionUser);
  }
 
  endSession(){
    this._httpService.endSession();
    this.router.navigate(["/landing"]);
  }

}
