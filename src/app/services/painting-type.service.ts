import {Inject, Injectable} from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {PaintingType} from "../models/paintingType.model";
import {ServerService} from "./server.service";
import {Painting} from "../models/painting.model";
import {PAINTING_URI} from "../app.module";

// const config: CrudConfig = { path: '/paintingType' }

@Injectable({
  providedIn: 'root'
})
export class PaintingTypeService extends CRUD<PaintingType> {

  constructor(
    protected server: ServerService,
    @Inject(PAINTING_URI) private $uri: CrudConfig
  ) {
    super(server, $uri);
  }

  public getPaintingByType(id: number){
    return this.server.get<Painting[]>(this.$uri.path + `/${id}/painting`);
  }
}
