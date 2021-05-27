import {​ Component, OnInit, resolveForwardRef }​ from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({​
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
}​)
export class AdminComponent implements OnInit {​

  constructor(private router: Router, private userService: UserService, private roomService : RoomService ,private app: AppComponent) {​ }​
  
  ngOnInit(): void {​
    this.getAllUsers();
    this.getAllRooms();
  }​
  
  users : User[];
  rooms : Room[];
  room : Room;

  displayUsers : boolean = true;
  displayRooms : boolean = false;
  
  displayAllUsers() : boolean{​
    this.displayRooms = false;
    return this.displayUsers = !this.displayUsers;
  }​
  
  displayAllRooms() : boolean{​
    this.displayUsers = false;
    return this.displayRooms = !this.displayRooms;
  }​

  getAllUsers()
  {
    this.userService.allUsers().subscribe(
      (response : User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }//end of getAllUsers

  getAllRooms()
  {
    this.roomService.allRooms().subscribe(
      (response : Room[]) => {
        this.rooms = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }//end of getAllRooms

  // deleteUser()
  // {
  //   this.userService.allUsers().subscribe(
  //     (response : User[]) => {
  //       this.users = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }//end of deleteUser

  deleteRoom(roomId : number)
  {
    this.roomService.delete(roomId).subscribe(
      (response : any) => {
        console.log(response);
        this.getAllRooms();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }//end of deleteRoom

}​
