import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  display:boolean=true;
  isLogged:boolean = false
  name: string;
  userName: string;
  email: string;
  phoneNumber: string;
  city: string;
  user: User
  constructor(private app:AppComponent,
    private router:Router,
    private route: ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    this.isLogged = this.app.isAuth()
    if(this.app.loggedUser===undefined){
    this.userService.find(userIdFromRoute).subscribe(
      (response:any) => {
        this.user = response
        console.log(this.user);
        console.log(this.isLogged);
      }
    )
    } else{
      this.user = this.app.loggedUser
      console.log(this.user);
    }
  }
  update(update: NgForm){
    
  }
  changeMode() : boolean{
   return this.display=!this.display;
  }

}