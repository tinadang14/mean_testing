import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from "./landing/landing.component";
import { CreateQuestionComponent } from "./create-question/create-question.component";
import { PlayComponent } from "./play/play.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo:"/landing"
  },
  {
    path:"landing",
    component:LandingComponent
  },
  {
    path:"newquestion",
    component:CreateQuestionComponent
  },
  {
    path:"letsplay",
    component:PlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
