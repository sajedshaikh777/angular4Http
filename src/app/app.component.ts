import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/models/user';
import { UsersService } from './shared/services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];

  constructor(private service: UsersService) {

  }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(
        useers => this.users = useers
        // err => {

        // }
      );

  }

}
