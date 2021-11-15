import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { AddPictureComponent } from './picture/add-picture/add-picture.component';
import { AddPaintingComponent } from './painting/add-painting/add-painting.component';
import { PicturePurchaseListComponent } from './picture/picture-purchase-list/picture-purchase-list.component';
import { PaintingPurchaseListComponent } from './painting/painting-purchase-list/painting-purchase-list.component';
import { PictureListComponent } from './picture/picture-list/picture-list.component';
import { PaintingListComponent } from './painting/painting-list/painting-list.component';
import { PaintingQuotationListComponent } from './painting/painting-quotation-list/painting-quotation-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';


@NgModule({
  declarations: [
    AdminViewComponent,
    AddPictureComponent,
    AddPaintingComponent,
    PicturePurchaseListComponent,
    PaintingPurchaseListComponent,
    PictureListComponent,
    PaintingListComponent,
    PaintingQuotationListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
