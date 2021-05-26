import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

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
        this.router.navigate(['/profile',response.id])
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
    )
  }
}
