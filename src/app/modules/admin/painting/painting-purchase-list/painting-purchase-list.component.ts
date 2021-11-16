import { Component, OnInit } from '@angular/core';
import {PaintingPurchaseService} from "../../../../services/painting-purchase.service";
import {PaintingPurchase} from "../../../../models/paintingPurchase.model";

@Component({
  selector: 'app-painting-purchase-list',
  templateUrl: './painting-purchase-list.component.html',
  styleUrls: ['./painting-purchase-list.component.scss']
})
export class PaintingPurchaseListComponent implements OnInit {
  paintingPurchaseList!: PaintingPurchase[];

  constructor(
    private paintingPurchaseService: PaintingPurchaseService
  ) { }

  ngOnInit(): void {
    this.paintingPurchaseService.getAll()
      .subscribe((data) => this.paintingPurchaseList = data);
  }

}
