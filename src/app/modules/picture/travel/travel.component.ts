import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../models/picture.model";
import {PictureCategoryService} from "../../../services/picture-category.service";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  pictureList!: Picture[];

  constructor(
    private pictureCategoryService: PictureCategoryService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(id: number = 2){
    this.pictureCategoryService.getPictureByType(id)
      .subscribe((pictures) => {
        this.pictureList = pictures;
      })
  }
}
