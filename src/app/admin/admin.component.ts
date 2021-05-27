import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Room } from '../room';
import { RoomService } from '../room.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];
  rooms: Room[];

  displayUsers: boolean = true;
  displayRooms: boolean = false;

  constructor(private router: Router,
    private userService: UserService,
    private roomService: RoomService,
    private app: AppComponent) { }

  ngOnInit(): void {
    if (this.app.loggedUser === undefined) {
      this.router.navigate(['/login'])
    }
    this.getAllUsers();
    this.getAllRooms();
  }

  displayAllUsers(): boolean {
    this.displayRooms = false;
    return this.displayUsers = !this.displayUsers;
  }

  displayAllRooms(): boolean {
    this.displayUsers = false;
    return this.displayRooms = !this.displayRooms;
  }

  getAllUsers() {
    this.userService.allUsers().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  getAllRooms() {
    this.roomService.allRooms().subscribe(
      (response: any) => {
        this.rooms = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  deleteRoom(roomId: number) {
    this.roomService.delete(roomId).subscribe(
      (response: any) => {
        this.getAllRooms();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }
  deleteUser(userId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Please confirm if you want to delete.',
      confirmButtonText: `Yes`,
      showDenyButton: true,
      denyButtonText: `No`,
    }).then((result)=>{
      if(result.isConfirmed)
      this.userService.delete(userId).subscribe(
        (response: any) => {
          Swal.fire({
            title: 'Deleted'
          })
          this.getAllUsers()
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      ) 
    })
  }

}