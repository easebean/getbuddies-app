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
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> c4ddc711dcc3c892ab89ac39fb64114604033d79

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatsComponent},
  { path: 'teams', component: DisplayTeamsComponent},
  { path: 'search', component: SearchTeamsComponent},
  { path: 'create-team', component: CreateTeamComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component }
]

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
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    RouterModule.forRoot(routes)
=======
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
>>>>>>> c4ddc711dcc3c892ab89ac39fb64114604033d79
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
