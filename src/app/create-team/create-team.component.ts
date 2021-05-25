import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  constructor(private roomService: RoomService, private app: AppComponent) { }

  ngOnInit(): void {
  }

  onAdd(room: NgForm) {
    if (this.app.loggedUser.id !== undefined) {
      this.roomService.createRoom(room.value, this.app.loggedUser.id).subscribe(
        (response: any) => {
          Swal.fire({
            
          })
        }
      )
    } else {

    }
  }

}