import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {PaintingType} from "../models/paintingType.model";
import {ServerService} from "./server.service";
import {Painting} from "../models/painting.model";

const config: CrudConfig = { path: '/paintingType' }

@Injectable({
  providedIn: 'root'
})
export class PaintingTypeService extends CRUD<PaintingType> {

  constructor(
    protected server: ServerService
  ) {
    super(server, config);
  }

  public getPaintingByType(id: number){
    return this.server.get<Painting[]>(config.path + `/${id}/painting`);
  }
}
