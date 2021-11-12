import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {Picture} from "../models/picture.model";
import {ServerService} from "./server.service";

const config: CrudConfig = { path: '/picture' }

@Injectable({
  providedIn: 'root'
})
export class PictureService extends CRUD<Picture>{

  constructor(
    protected server: ServerService
  ) {
    super(server, config)
  }
}
