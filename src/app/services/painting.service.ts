import { Injectable } from '@angular/core';
import {CRUD, CrudConfig} from "./crud";
import {Painting} from "../models/painting.model";
import {ServerService} from "./server.service";
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";

const config: CrudConfig = { path: "/painting" }

@Injectable({
  providedIn: 'root'
})
export class PaintingService extends CRUD<Painting>{
  insert(body: Painting, ): Observable<Painting> {
    return super.insert(body);
  }

  constructor(
    protected server: ServerService,
    private http: HttpClient
  ) {
    super(server, config);
  }

  public getByAvailability(){
    return this.server.get<Painting[]>(config.path + '/isAvailable');
  }

  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`http://localhost:8080${config.path}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
