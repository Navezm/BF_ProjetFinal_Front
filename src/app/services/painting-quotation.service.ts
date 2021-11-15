import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {PaintingQuotation} from "../models/paintingQuotation.model";
import {ServerService} from "./server.service";

const config: CrudConfig = { path: "/paintingQuotation" }

@Injectable({
  providedIn: 'root'
})
export class PaintingQuotationService extends CRUD<PaintingQuotation>{

  constructor(
    protected server: ServerService
  ) {
    super(server, config);
  }
}
