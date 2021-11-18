import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {ServerService} from "./server.service";
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {map} from 'rxjs/operators';
import {Role} from "../models/role.model";
import {Authorization} from "./authorization.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwt: JwtHelperService = new JwtHelperService();
  private isLoggedIn: boolean = false;

  constructor(
    private server: ServerService,
    private router: Router
  ) {
    this.isLoggedIn = this.checkToken();
  }

  public login(user: User) {
    return this.server.post<User>('/login', user)
      .pipe(map((user: User) => {
        if(user.token) {
          localStorage.setItem('token', user.token.replace('Bearer ', ''));
          localStorage.setItem('user', JSON.stringify(user));
          this.isLoggedIn = true;
        }
        return this.isLoggedIn;
      }));
  }

  public register(user: User) {
    return this.server.post<User>('/register', user)
      .pipe(map((user: User) => {
        if(user.token) {
          localStorage.setItem('token', user.token.replace('Bearer ', ''));
          localStorage.setItem('user', JSON.stringify(user));
          this.isLoggedIn = true;
        }
        return this.isLoggedIn;
      }));
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  // public isCurrentUser(user: User) {
  //   const loggedUser = JSON.parse(<string>localStorage.getItem('user')) as User;
  //
  //   return user.id == loggedUser.id;
  // }

  private checkAuthorization(type: string) {
    const user = JSON.parse(<string>localStorage.getItem('user')) as User;

    if(user) {
      return user.group.name == type;
    }

    return false;
  }

  public isUser() {
    return this.checkAuthorization('USER');
  }


  public isAdmin() {
    return this.checkAuthorization('ADMIN');
  }

  public getloggedIn() {
    return this.isLoggedIn;
  }

  private checkToken() {
    const token = localStorage.getItem('token');

    if(!token || this.jwt.isTokenExpired(token)) {
      this.logout();
      return false;
    }
    return true;
  }
}

