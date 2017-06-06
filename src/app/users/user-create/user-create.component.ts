import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = { name: '', username: '', avatar: ''};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Create sa user
   */
   createUser() {
     this.successMessage = '';
     this.errorMessage = '';

     this.service.createUser(this.user)
        .subscribe( user => {
          this.successMessage = 'User was created!';
          console.log("User was created.");
          
          // navigate back to the users page
          this.router.navigate(['/users']);
        });

   }

}
