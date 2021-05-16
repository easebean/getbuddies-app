import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ChatsComponent } from './chats/chats.component';
import { SearchTeamsComponent } from './search-teams/search-teams.component';
import { DisplayTeamsComponent } from './display-teams/display-teams.component';
import { Error404Component } from './error404/error404.component';
import { CreateTeamComponent } from './create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    NavComponent,
    SignUpComponent,
    LoginComponent,
    ChatsComponent,
    SearchTeamsComponent,
    DisplayTeamsComponent,
    Error404Component,
    CreateTeamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
