import { Component, OnInit } from '@angular/core';
import {PictureService} from "../../../services/picture.service";
import {Picture} from "../../../models/picture.model";

@Component({
  selector: 'app-shop-picture',
  templateUrl: './shop-picture.component.html',
  styleUrls: ['./shop-picture.component.scss']
})
export class ShopPictureComponent implements OnInit {
  pictureList!: Picture[]

  constructor(
    private pictureService: PictureService
  ) { }

  ngOnInit(): void {
    this.getPictureAvailable();
  }

  public getPictureAvailable(){
    this.pictureService.getByAvailability()
      .subscribe((pictures: Picture[]) => {
        this.pictureList = pictures;
      })
  }

}
