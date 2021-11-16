import { Component, OnInit } from '@angular/core';
import {PicturePurchase} from "../../../../models/picturePurchase.model";
import {PicturePurchaseService} from "../../../../services/picture-purchase.service";

@Component({
  selector: 'app-picture-purchase-list',
  templateUrl: './picture-purchase-list.component.html',
  styleUrls: ['./picture-purchase-list.component.scss']
})
export class PicturePurchaseListComponent implements OnInit {
  picturePurchaseList!: PicturePurchase[];

  constructor(
    private picturePurchaseService: PicturePurchaseService
  ) { }

  ngOnInit(): void {
    this.picturePurchaseService.getAll()
      .subscribe((data) => this.picturePurchaseList = data);
  }

}
