import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../models/picture.model";
import {PictureCategoryService} from "../../../services/picture-category.service";

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {
  pictureList!: Picture[];

  constructor(
    private pictureCategoryService: PictureCategoryService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(id: number = 4){
    this.pictureCategoryService.getPictureByType(id)
      .subscribe((pictures) => {
        this.pictureList = pictures;
      })
  }
}
