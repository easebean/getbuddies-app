import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Room';
import { ROOMS } from 'src/app/mock-rooms';

@Component({
  selector: 'app-display-teams',
  templateUrl: './display-teams.component.html',
  styleUrls: ['./display-teams.component.css']
})
export class DisplayTeamsComponent implements OnInit {

  rooms = ROOMS;
 
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(room: Room):void{
  }

}
