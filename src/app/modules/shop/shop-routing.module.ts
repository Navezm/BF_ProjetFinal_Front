import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopViewComponent} from "./shop-view/shop-view.component";
import {ShopPaintingComponent} from "./shop-painting/shop-painting.component";
import {ShopPictureComponent} from "./shop-picture/shop-picture.component";

const routes: Routes = [
  { path: '', component: ShopViewComponent, children: [
      { path: 'painting', component: ShopPaintingComponent },
      { path: 'picture', component: ShopPictureComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
