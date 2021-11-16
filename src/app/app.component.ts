import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetFinalFront';

  constructor(
    private authService: AuthService
  ) {
  }

  public isloggedIn() {
    return this.authService.getloggedIn();
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }

  public loggedIn() {
    return this.authService.getloggedIn();
  }

  public logout() {
    return this.authService.logout();
  }
}
