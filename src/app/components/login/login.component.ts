import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  usernameCtl: FormControl;
  passwordCtl: FormControl;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.usernameCtl = this.fb.control(null, [Validators.required]);
    this.passwordCtl = this.fb.control(null, [Validators.required]);

    this.userForm = this.fb.group({
      username: this.usernameCtl,
      password: this.passwordCtl
    })
  }

  ngOnInit(): void {
  }

  public submit() {
    if(this.userForm.valid) {
      const user = this.userForm.value as User;

      this.authService.login(user)
        .subscribe((data) => {
          console.log(data ? "loggedIn" : "invalid user");
          if(data) {
            this.router.navigate(['']);
          }
        } );
    }
  }

}
