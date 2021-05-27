import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: User
  name: string;
  userName: string;
  password: string;
  rePassword: string;
  email: string;
  phoneNumber: string;
  city: string;
  constructor(private userService: UserService,private router: Router,private app:AppComponent) { }

  ngOnInit(): void {
  }

  onAdd(user: NgForm) {
    this.newUser = { 
      name: user.value.name, 
      userName: user.value.userName, 
      password: user.value.password, 
      email: user.value.email, 
      phoneNumber: user.value.phoneNumber, 
      city: user.value.city
    }

    var strongRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_-])(?=.{8,})");
    function emailIsValid(){
      return user.value.email.includes("@");
    }

    
    if(user.value.password !== user.value.rePassword)
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Passwords do not match',
      })
    }//end of if
    else if(!(strongRegex.test(user.value.password)))
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
      })
    }
    else if(!(user.value.phoneNumber.length == 10))
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Phone number should be of 10 digits',
      })
    }
    else if(!(emailIsValid()))
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Invalid Email',
      })
    }
    else
    {
      this.userService.create(this.newUser).subscribe(
        (response: User) => {
          console.log(response);
          this.app.loggedUser = response
          Swal.fire({
            title: 'Welcome',
            html: `Hi! ${response.name} <br> Registered Successfully`,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          this.router.navigate([`/profile/${this.newUser.id}`])
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          Swal.fire({
            title: 'Error!',
            text: 'Registration Failed',
            icon: 'error',
            confirmButtonText: 'Try again'
          })
        }
      )//end of subscribe

    }//end of else

  }
}
