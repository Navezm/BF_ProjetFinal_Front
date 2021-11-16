import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList!: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe((data) => this.userList = data);
  }

}
