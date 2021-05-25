import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  display:boolean=true;
  name: string;
  userName: string;
  email: string;
  phoneNumber: string;
  city: string;
  user: User
  constructor(private app:AppComponent,private router:Router) { }

  ngOnInit(): void {
    this.user = this.app.loggedUser
    if(this.user===undefined)
    this.router.navigate(['/login'])
  }

  changeMode() : boolean{
 
   return this.display=!this.display;
  }

}