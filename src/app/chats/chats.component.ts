import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';
import { ChatMessageService } from '../chatMessage.service';
import { OrderByPipe } from '../orderBy';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  room: Room
  roomIdFromRoute: number
  orderBy: OrderByPipe
  t: any

  constructor(private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService,
    private chatService: ChatMessageService,
    private app: AppComponent) {
    const routeParams = this.route.snapshot.paramMap;
    this.roomIdFromRoute = Number(routeParams.get('roomId'));
  }

  ngOnInit(): void {
    if (this.app.loggedUser === undefined)
      this.router.navigate(['/login'])
    else {
      this.get()
      this.t = setInterval(() => { this.get() }, 1500)
      if(this.room.endTime<=new Date()){
        this.roomService.delete(this.room.id)
        this.router.navigate(['/home'])
      }
    }
  }

  ngOnDestroy() {
    clearInterval(this.t)
  }
  get() {
    this.roomService.getRoom(this.roomIdFromRoute).subscribe(
      (response: any) => {
        this.room = response
        console.log(this.room);
      }
    )
  }

  onSend(chat: NgForm) {
    var c = chat.value
    this.chatService.sendChat({ text: c.text, author: this.app.loggedUser.name, createDate: new Date() }, this.roomIdFromRoute)
      .subscribe(
        (response: any) => {
          console.log(response);
          chat.reset()
        }
      )
  }

  searchUser() {
    Swal.fire({
      title: 'Add User!',
      input: 'text',
      showCancelButton: true,

      confirmButtonText: 'Add'

    }).then(
      (result) => {
        this.roomService.addUser(this.room, result.value).subscribe(
          (response: any) => {
            Swal.fire({
              title: 'User Added',
              text: `Total members ${response.users.length} in the ${response.name}`
            })
          },
          (error: HttpErrorResponse) => {
            console.log(error.message);

          }
        )
      }
    )

  }

}
