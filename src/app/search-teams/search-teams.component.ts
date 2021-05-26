import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-search-teams',
  templateUrl: './search-teams.component.html',
  styleUrls: ['./search-teams.component.css']
})
export class SearchTeamsComponent implements OnInit {
  key:string
  rooms:Room[]
  constructor(private roomService:RoomService,private app:AppComponent,private router: Router) { }

  ngOnInit(): void {
  }
  onSearch(){
    this.roomService.findByName(this.key).subscribe(
      (response:any) => {
        this.rooms = response
        console.log(this.rooms);        
      },
      (error:HttpErrorResponse) =>{
        console.log(error.message);
      }
    )
  }
  joinTeam(room:Room){
    if(room.users.includes(this.app.loggedUser)){
      Swal.fire({
        title: 'Already a member!',
        text: 'You are already a member of this room. You can go to the chatroom',
        icon: 'warning',
        confirmButtonText: 'Go to Chat'
      }).then(()=>{
        this.router.navigate([`/chat/${room.id}`])
      })
    }
    else if(this.app.loggedUser!==undefined)
    this.roomService.addUser(room,this.app.loggedUser.userName).subscribe(
      (response:any) => {
        Swal.fire({
          title: 'Successfully added',
          text: `Successfully added to the ${response.name}`,
          icon: 'success'
        }).then(()=>{
          this.router.navigate(['/chat',response.id])
        })
      }
    )
    else 
      Swal.fire({
        title: 'Invalid access!',
        text: 'Please login/signup first',
        icon: 'warning'
      }).then(()=>{
        this.router.navigate(['/login'])
      })
  }
}
