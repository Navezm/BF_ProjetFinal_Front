import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../models/picture.model";
import {PictureCategoryService} from "../../../services/picture-category.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  pictureList!: Picture[];

  constructor(
    private pictureCategoryService: PictureCategoryService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(id: number = 3){
    this.pictureCategoryService.getPictureByType(id)
      .subscribe((pictures) => {
        this.pictureList = pictures;
      })
  }
}
