import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Room } from '../room';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display-teams',
  templateUrl: './display-teams.component.html',
  styleUrls: ['./display-teams.component.css']
})
export class DisplayTeamsComponent implements OnInit {
  rooms:Room[]
  constructor(private userService:UserService,private app:AppComponent) { }

  ngOnInit(): void {
    if(this.app.loggedUser.id!==undefined)
    this.getRooms()
  }
  getRooms(){
    this.userService.rooms(this.app.loggedUser.id).subscribe(
      (response:any) => {
        this.rooms = response
        console.log(response);
        
      },
      (error:HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }
}
