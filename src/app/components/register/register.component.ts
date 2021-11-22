import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {ServerService} from "../../services/server.service";

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  usernameCtl: FormControl;
  passwordCtl: FormControl;
  emailCtl: FormControl;
  addressForm: FormGroup;
  streetCtl: FormControl;
  numberCtl: FormControl;
  postCodeCtl: FormControl;
  cityCtl: FormControl;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private server: ServerService,
    private router: Router
  ) {
    this.usernameCtl = this.fb.control(null, [Validators.required]);
    this.passwordCtl = this.fb.control(null, [Validators.required]);
    this.emailCtl = this.fb.control(null, [Validators.required]);

    this.streetCtl = this.fb.control(null, [Validators.required]);
    this.numberCtl = this.fb.control(null, [Validators.required]);
    this.postCodeCtl = this.fb.control(null, [Validators.required]);
    this.cityCtl = this.fb.control(null, [Validators.required]);

    this.addressForm = this.fb.group({
      street: this.streetCtl,
      number: this.numberCtl,
      postCode: this.postCodeCtl,
      city: this.cityCtl
    })

    this.userForm = this.fb.group({
      username: this.usernameCtl,
      email: this.emailCtl,
      password: this.passwordCtl,
      address: this.addressForm
    })

  }

  ngOnInit(): void {
  }

  submit(userForm: FormGroup) {
    const user = userForm.value as User;

    this.authService.register(user).subscribe();

    this.router.navigateByUrl('');
  }

}
