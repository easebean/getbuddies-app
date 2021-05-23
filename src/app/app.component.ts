import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  authenticated: boolean = true
  loggedUser:User
  userService:UserService
  constructor(private router: Router){}
  ngOnInit(){

  }
  onLogIn(userName:string,password:string){
    this.userService.login(userName,password).subscribe(
      (response:User) => {
        this.loggedUser = response
        console.log(this.loggedUser);
        this.router.navigate(['/dashboard'])
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);
        
      }
    )
  }
  onAdd(user:User){
    this.userService.create(user).subscribe(
      (response:User) =>{

      },
      (error:HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }
  
}
