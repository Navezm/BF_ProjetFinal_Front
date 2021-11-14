import { Component, OnInit } from '@angular/core';
import {Painting} from "../../../models/painting.model";
import {PaintingService} from "../../../services/painting.service";

@Component({
  selector: 'app-shop-painting',
  templateUrl: './shop-painting.component.html',
  styleUrls: ['./shop-painting.component.scss']
})
export class ShopPaintingComponent implements OnInit {
  paintingList!: Painting[];
  panier: Painting[] = [];

  constructor(
    private paintingService: PaintingService
  ) { }

  ngOnInit(): void {
    this.getPaintingAvailable();
  }

  public getPaintingAvailable(){
    this.paintingService.getByAvailability()
      .subscribe((paintings: Painting[]) => {
        this.paintingList = paintings;
      })
  }

  buyAction(item: Painting){
    if(!this.panier.includes(item)){
      this.panier.push(item);
    }
  }

}
