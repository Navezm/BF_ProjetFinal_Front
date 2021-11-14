import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopViewComponent } from './shop-view/shop-view.component';
import { ShopPictureComponent } from './shop-picture/shop-picture.component';
import { ShopPaintingComponent } from './shop-painting/shop-painting.component';
import { TileComponent } from './tile/tile.component';


@NgModule({
  declarations: [
    ShopViewComponent,
    ShopPictureComponent,
    ShopPaintingComponent,
    TileComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
