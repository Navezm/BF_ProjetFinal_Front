import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user.model";
import {UtilService} from "../../../../services/util.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList!: User[];
  loggedUser = JSON.parse(<string>localStorage.getItem('user')) as User;
  id = this.loggedUser.id;

  constructor(
    private userService: UserService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe((data) => this.userList = data);
  }

  delete(id: any){
    this.userService.delete(id).subscribe();
    this.utilService.reloadComponent();
  }

}
