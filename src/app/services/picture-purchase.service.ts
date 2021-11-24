import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {PicturePurchase} from "../models/picturePurchase.model";
import {ServerService} from "./server.service";

const config: CrudConfig = { path: '/picturePurchase' }

@Injectable({
  providedIn: 'root'
})
export class PicturePurchaseService extends CRUD<PicturePurchase>{

  constructor(
    protected server: ServerService
  ) {
    super(server, config);
  }
}
