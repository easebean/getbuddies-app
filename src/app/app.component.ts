import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public authenticated: boolean = false
  public loggedUser:User
  
  constructor(){
    if(this.loggedUser!==undefined)
    this.authenticated = true
  }

  ngOnInit(){

  }
  isAuth():boolean{
    return this.authenticated
  }
  
  
}
