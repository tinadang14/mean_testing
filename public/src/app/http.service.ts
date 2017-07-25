import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class HttpService {
  user;
  constructor(private _http: Http) { }
    newQuestion(question) {
    console.log("in the create question service")
    return this._http.post("/createQuestion", question).map(data => data.json()).toPromise();
  }

  allQuestions() {
    return this._http.get("/allQuestions").map(data => data.json()).toPromise();
  }

  newUser(user){
    console.log("create user in service")
    return this._http.post("/newUser", user).map(data => data.json()).toPromise();

  }
  allUsers(){
    return this._http.get("/allUsers").map(data => data.json()).toPromise();
  }
  checkSession(){
    if(this.user){
      return this.user;
    }
    return false;
    
  }
  setSession(name){
    this.user=name;
    return this._http.post("/setSession", name).map(data => data.json()).toPromise();
  }
  endSession(){
    this.user = undefined;
    this._http.get("/endSession").map(data => data.json()).toPromise();
  }

}
