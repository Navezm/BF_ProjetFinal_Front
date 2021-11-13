import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {Painting} from "../models/painting.model";
import {ServerService} from "./server.service";

const config: CrudConfig = { path: "/painting" }

@Injectable({
  providedIn: 'root'
})
export class PaintingService extends CRUD<Painting>{

  constructor(
    protected server: ServerService
  ) {
    super(server, config);
  }
}
