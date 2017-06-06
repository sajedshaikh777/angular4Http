import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UsersService {

  private userUrl: string = 'https://reqres.in/api/users';

  constructor(private http: Http) { }

  /**
   * Get all users
   */
   getUsers(): Observable<User[]> {
    return this.http.get(this.userUrl)
      .map(res => res.json().data)
      .map(users => users.map(this.toUser))
      .catch( this.handleError );
   }


  /**
   * Get a single user
   */
   getUser(id: number): Observable<User>{
     return this.http.get(`${this.userUrl}/${id}`)
      .map(res => res.json().data)
      .map(this.toUser)
      .catch( this.handleError );

   }

  /**
   * create the user
   */
   createUser(user: User):Observable<User> {
    return this.http.post(`${this.userUrl}/users`, user)
      .map(res => res.json())
      .catch( this.handleError );
   }


  /**
   * update the user
   */
  updateUser(user: User):  Observable<User>{
    return this.http.put(`${this.userUrl}/${user.id}`, user)
    // To generate an error
    // return this.http.get(`${this.userUrl}/23`)
      .map(res => res.json())
      .catch( this.handleError );

  }


  // delete a user

  /**
   * Convert user info from the API to our standard/format
   */
  private toUser(user): User {
    return {
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      username: user.first_name,
      avatar: user.avatar
    };
  }


  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || '' } ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
   }

}
