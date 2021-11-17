import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../../models/picture.model";
import {PictureService} from "../../../../services/picture.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {
  pictureList!: Picture[];

  constructor(
    private pictureService: PictureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(){
    this.pictureService.getAll()
      .subscribe((pictures: Picture[]) => {
        this.pictureList = pictures;
      })
  }

  delete(id: number){
    this.pictureService.delete(id).subscribe();
    this.router.navigateByUrl("admin/picture/list");
  }
}
