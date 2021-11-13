import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {EventCategory} from "../models/eventCategory.model";
import {ServerService} from "./server.service";
import {Picture} from "../models/picture.model";

const config: CrudConfig = { path: '/eventCategory' }

@Injectable({
  providedIn: 'root'
})
export class PictureCategoryService extends CRUD<EventCategory>{

  constructor(
    protected server: ServerService
  ) {
    super(server, config);
  }

  public getPictureByType(id: number){
    return this.server.get<Picture[]>(config.path + `/${id}/pictures`);
  }
}
