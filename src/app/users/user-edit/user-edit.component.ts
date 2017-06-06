import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // grab the user
    let id = this.route.snapshot.params['id'];
    this.service.getUser(id).subscribe(user => this.user = user);
  }


  /**
   * update the user
   */
   updateUser(){
     this.successMessage = '';
     this.errorMessage = '';
     this.service.updateUser(this.user)
      .subscribe(
        user => {
        this.successMessage = 'User was updated.';
        console.log('User was updated.');
      },
      err => {
        // For custom error messgae
        this.errorMessage = 'User could not be updated.';
        // For server error message 
        // this.errorMessage = err;
        console.error(err);
      }
      );
   }

}
