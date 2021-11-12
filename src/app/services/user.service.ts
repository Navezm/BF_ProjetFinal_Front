import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {CRUD, CrudConfig} from "./crud";
import {ServerService} from "./server.service";

const config: CrudConfig = { path: 'user' }

@Injectable({
  providedIn: 'root'
})
export class UserService extends CRUD<User>{

  constructor(
    protected server: ServerService
  ) {
    super(server, config);
  }
}
