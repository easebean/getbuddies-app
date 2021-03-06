import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private app: AppComponent) { }

  ngOnInit(): void {
  }

  onLogIn(user: NgForm) {
    this.userService.login(user.value.userName, user.value.password).subscribe(
      (response: User) => {
        if (response !== null) {
          this.app.authenticated = true
          this.app.loggedUser = response
                    
          if(user.value.userName=='admin'){
            this.router.navigate(['/admin'])  
          } else
          this.router.navigate([`/profile/${response.id}`])
        } else{
          Swal.fire({
            title: 'Bad Credentials!',
            html: `Hi, ${user.value.userName} ! <br> Username or password is wrong.`,
            icon: 'error',
            confirmButtonText: 'Try again'
          })
          user.reset()
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);

      }
    )
  }
}
