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
     this.service.updateUser(this.user)
      .subscribe(user => {
        console.log('User was updated.');
      });
   }

}
