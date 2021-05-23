import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public authenticated: boolean = true
  public loggedUser:User
  
  ngOnInit(){

  }
  isAuth():boolean{
    return this.authenticated
  }
  
  
}
