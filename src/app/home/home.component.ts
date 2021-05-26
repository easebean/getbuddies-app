import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Image:string
  auth:boolean
  constructor(private app:AppComponent) { 
    this.Image = '/assets/img/homegb.png'
  }

  ngOnInit(): void {
    this.auth = this.app.isAuth()
  }

}
