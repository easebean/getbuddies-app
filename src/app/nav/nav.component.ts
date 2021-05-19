import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  path:string
  constructor(public auth:Auth) { }

  ngOnInit(): void {
    if(this.auth.isAuth)
    this.path = "/create-team"
    else
    this.path = "/signup"
  }

}
