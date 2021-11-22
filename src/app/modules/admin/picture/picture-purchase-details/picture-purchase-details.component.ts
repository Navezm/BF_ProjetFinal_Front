import { Component, OnInit } from '@angular/core';
import {PicturePurchase} from "../../../../models/picturePurchase.model";
import {PicturePurchaseService} from "../../../../services/picture-purchase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-picture-purchase-details',
  templateUrl: './picture-purchase-details.component.html',
  styleUrls: ['./picture-purchase-details.component.scss']
})
export class PicturePurchaseDetailsComponent implements OnInit {
  picturePurchase!: PicturePurchase;

  constructor(
    private picturePurchaseService: PicturePurchaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let tab: string[] = this.router.url.split('/');
    this.picturePurchaseService.getOneById(Number(tab[tab.length - 1]))
      .subscribe((data) => this.picturePurchase = data);
  }

  delete(id: any){
    this.picturePurchaseService.delete(id).subscribe();
    this.router.navigateByUrl('admin/picture/purchase');
  }
}
