import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../../models/picture.model";
import {PictureService} from "../../../../services/picture.service";

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {
  pictureList!: Picture[];

  constructor(
    private pictureService: PictureService
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
}
