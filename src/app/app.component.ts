import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  authenticated: boolean = true
  userService:UserService
  ngOnInit(){

  }
  onLogIn(userName:string,password:string){
    
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
