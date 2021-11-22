import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../models/picture.model";
import {PictureService} from "../../../services/picture.service";

@Component({
  selector: 'app-all-picture',
  templateUrl: './all-picture.component.html',
  styleUrls: ['./all-picture.component.scss']
})
export class AllPictureComponent implements OnInit {
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
