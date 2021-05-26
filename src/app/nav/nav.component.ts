import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  auth:boolean = false
  userId:number
  constructor(private app:AppComponent) {}

  ngOnInit() {
    this.auth = this.app.isAuth()
    if(this.auth)
    this.userId = this.app.loggedUser.id
  }

}
