import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public display:boolean=true;

name:string;
userName:string;
phoneNumber:string;
country:string;
email:string;

  constructor() { }

  ngOnInit(): void {
  }

  changeMode() : boolean{
 
   return this.display=!this.display;
  }

}
