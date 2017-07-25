import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from '@angular/router';
import { CommunicateService } from "../communicate.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  searchtext="";
  sessionUser;
  users;
  constructor(private _httpService:HttpService, private router:Router, private _communicateService: CommunicateService) { 
    console.log("in the landing constructor")
    this._communicateService.observedUser.subscribe(
      (updatedUser)=>{this.sessionUser = updatedUser;},
      (err)=>{},
      ()=>{}
    )
    if(!this.sessionUser){
      this.sessionUser={
        name:"",
        lastGame:{score:"Nope",percentage:"Nope"},
        trivia:"Nope"
      }
      this.sessionUser.name = prompt("Hello human enter your name")
      this.updateUser();
    }
    console.log(`this is the observable thing ${this.sessionUser}`)
    this.allUsers();
  }
  ngOnInit() {}

  updateUser(){
    this._communicateService.updateUser(this.sessionUser);
  }
  endSession(){
    this.sessionUser = null;
    this.updateUser();
  }

  allUsers(){
    console.log('inside all users of landing ts')
    this._httpService.allUsers().then( result => { this.users = result}).catch( err => { console.log(err); })
  }
  

}

