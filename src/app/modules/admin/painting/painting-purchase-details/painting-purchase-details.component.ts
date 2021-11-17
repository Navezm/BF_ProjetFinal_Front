import { Component, OnInit } from '@angular/core';
import {PaintingPurchase} from "../../../../models/paintingPurchase.model";
import {PaintingPurchaseService} from "../../../../services/painting-purchase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-painting-purchase-details',
  templateUrl: './painting-purchase-details.component.html',
  styleUrls: ['./painting-purchase-details.component.scss']
})
export class PaintingPurchaseDetailsComponent implements OnInit {
  paintingPurchase!: PaintingPurchase;

  constructor(
    private paintingPurchaseService: PaintingPurchaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paintingPurchaseService.getOneById(Number(this.router.url.charAt(this.router.url.length - 1)))
      .subscribe((data) => this.paintingPurchase = data);
  }

  delete(id: any){
    this.paintingPurchaseService.delete(id).subscribe();
    this.router.navigateByUrl('admin/painting/purchase');
  }
}
