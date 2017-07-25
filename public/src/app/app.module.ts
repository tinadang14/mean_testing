import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { LandingComponent } from './landing/landing.component';
import { PlayComponent } from './play/play.component';
import { FilterPipe } from './filter.pipe';

import { CommunicateService } from "./communicate.service";
import { HttpService } from "./http.service";

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    LandingComponent,
    PlayComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
