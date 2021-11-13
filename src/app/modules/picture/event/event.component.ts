import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../models/picture.model";
import {PictureCategoryService} from "../../../services/picture-category.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  pictureList!: Picture[];

  constructor(
    private pictureCategoryService: PictureCategoryService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(id: number = 1){
    this.pictureCategoryService.getPictureByType(id)
      .subscribe((pictures: Picture[]) => {
        this.pictureList = pictures;
      })
  }
}
