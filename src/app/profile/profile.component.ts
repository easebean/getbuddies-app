import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
      }
    )
    } else{
      this.user = this.app.loggedUser;
      this.userName = this.app.loggedUser.userName;
    }
  }

  onUpdate(update: NgForm){

    //password,phone number and email validation
    var strongRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_-])(?=.{8,})");

    if(!(strongRegex.test(this.user.password)))
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
      })
    }
    else if(!(this.user.phoneNumber.length == 10))
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Phone number should be of 10 digits',
      })
    }
    else if(!(this.user.email.includes("@")))
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Invalid Email',
      })
    }
    else{
      this.userService.update(this.user).subscribe(
      (response:any)=>{
        Swal.fire({
          title: 'Details Updated',
          text: `${response.name} details updated`
        })       
      }
    )}
  }
  changeMode() : boolean{
   return this.display=!this.display;
  }

}