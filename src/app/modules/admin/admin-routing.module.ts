import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./admin/user-list/user-list.component";
import {AddPaintingComponent} from "./painting/add-painting/add-painting.component";
import {PaintingListComponent} from "./painting/painting-list/painting-list.component";
import {PaintingPurchaseListComponent} from "./painting/painting-purchase-list/painting-purchase-list.component";
import {PaintingQuotationListComponent} from "./painting/painting-quotation-list/painting-quotation-list.component";
import {AddPictureComponent} from "./picture/add-picture/add-picture.component";
import {PictureListComponent} from "./picture/picture-list/picture-list.component";
import {PicturePurchaseListComponent} from "./picture/picture-purchase-list/picture-purchase-list.component";

const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'painting', children: [
      { path: 'add', component: AddPaintingComponent },
      { path: 'list', component: PaintingListComponent },
      { path: 'purchase', component: PaintingPurchaseListComponent },
      { path: 'quotation', component: PaintingQuotationListComponent }
    ] },
  { path: 'picture', children: [
      { path: 'add', component: AddPictureComponent },
      { path: 'list', component: PictureListComponent },
      { path: 'purchase', component: PicturePurchaseListComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
