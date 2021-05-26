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
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'profile/:userId', component: ProfileComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
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
    CreateTeamComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
