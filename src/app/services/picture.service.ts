import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {Picture} from "../models/picture.model";
import {ServerService} from "./server.service";
import {Observable} from "rxjs";
import {HttpClient, HttpEvent} from "@angular/common/http";

const config: CrudConfig = { path: '/picture' }

@Injectable({
  providedIn: 'root'
})
export class PictureService extends CRUD<Picture>{

  constructor(
    protected server: ServerService,
    private http: HttpClient
  ) {
    super(server, config);
  }

  public getByAvailability() {
    return this.server.get<Picture[]>(config.path + '/isAvailable');
  }

  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`http://localhost:8080${config.path}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getPictureBack(){
    return this.server.get(config.path + '/allBack');
  }
}
