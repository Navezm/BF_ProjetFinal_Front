import { Component, OnInit } from '@angular/core';
import {PaintingPurchaseService} from "../../../../services/painting-purchase.service";
import {PaintingPurchase} from "../../../../models/paintingPurchase.model";
import {UtilService} from "../../../../services/util.service";

@Component({
  selector: 'app-painting-purchase-list',
  templateUrl: './painting-purchase-list.component.html',
  styleUrls: ['./painting-purchase-list.component.scss']
})
export class PaintingPurchaseListComponent implements OnInit {
  paintingPurchaseList!: PaintingPurchase[];

  constructor(
    private paintingPurchaseService: PaintingPurchaseService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.paintingPurchaseService.getAll()
      .subscribe((data) => this.paintingPurchaseList = data);
  }

  delete(id: any){
    this.paintingPurchaseService.delete(id).subscribe();
    this.utilService.reloadComponent();
  }
}
