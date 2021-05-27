import {​ Component, OnInit }​ from '@angular/core';
import {​ NgForm }​ from '@angular/forms';
import {​ Router }​ from '@angular/router';
import Swal from 'sweetalert2';
import {​ AppComponent }​ from '../app.component';
import {​ RoomService }​ from '../room.service';
@Component({​
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
}​)
export class CreateTeamComponent implements OnInit {​
  constructor(private roomService: RoomService, private app: AppComponent, private router: Router) {​ }​
  ngOnInit(): void {​
  }​
  onAdd(room: NgForm) {​
    var f = room.value
    if (this.app.loggedUser !== undefined) {​
      if(new Date(f.endDate)>=new Date()){​
        var newRoom = {​
          name:f.name,
          createdBy:this.app.loggedUser.name,
          created:new Date(),
          category:f.category,
          endTime:f.endDate,
          details:f.details
        }​
      this.roomService.createRoom(newRoom,this.app.loggedUser.id).subscribe(
        (response: any) => {​
          Swal.fire({​
            title: 'Team created!',
            html: `${​response.name}​ team has been created successfully.`,
            icon: 'success',
            confirmButtonText: 'Cool'
          }​)
          this.router.navigate(['/teams'])
        }​
      )
    }​ else {​
      Swal.fire({​
        title: 'Invalid date!',
        html: `Please enter a future date`,
        icon: 'warning',
        confirmButtonText: 'Try again'
      }​)
    }​
  }​ else {​
      Swal.fire({​
        title: 'Invalid access!',
        html: `Hi, guest! <br> Login/SignUp to create team.`,
        icon: 'warning',
        confirmButtonText: 'Login/SignUp'
      }​).then(
        (result) => {​
          if (result.isConfirmed) {​
        this.router.navigate(['/login'])}​
    }​)
  }​
}​
}​
