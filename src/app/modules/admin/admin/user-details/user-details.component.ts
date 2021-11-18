import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user.model";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";
import {UtilService} from "../../../../services/util.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getOneById(Number(this.router.url.charAt(this.router.url.length - 1)))
      .subscribe((user) => this.user = user);
  }

  delete(id: any){
    this.userService.delete(id).subscribe();
    this.router.navigateByUrl('admin/user');
  }

}
