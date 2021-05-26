import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private roomService:RoomService) { }

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
}
