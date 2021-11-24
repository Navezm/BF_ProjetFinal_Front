import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {PaintingPurchase} from "../models/paintingPurchase.model";
import {ServerService} from "./server.service";

const config: CrudConfig = { path: '/paintingPurchase' }

@Injectable({
  providedIn: 'root'
})
export class PaintingPurchaseService extends CRUD<PaintingPurchase>{

  constructor(
    protected server: ServerService
  ) {
    super(server, config);
  }
}
