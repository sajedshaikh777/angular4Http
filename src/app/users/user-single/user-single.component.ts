import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user'; 
import { UsersService } from '../../shared/services/users.service';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private service: UsersService) { }

  ngOnInit() {
    // grab the id from the url
    let id = this.route.snapshot.params['id'];

    // use the userService to getUser()
    this.service.getUser(id)
      .subscribe(user => this.user = user);
  }

}
