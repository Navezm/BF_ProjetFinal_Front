import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddPictureComponent } from './picture/add-picture/add-picture.component';
import { AddPaintingComponent } from './painting/add-painting/add-painting.component';
import { PicturePurchaseListComponent } from './picture/picture-purchase-list/picture-purchase-list.component';
import { PaintingPurchaseListComponent } from './painting/painting-purchase-list/painting-purchase-list.component';
import { PictureListComponent } from './picture/picture-list/picture-list.component';
import { PaintingListComponent } from './painting/painting-list/painting-list.component';
import { PaintingQuotationListComponent } from './painting/painting-quotation-list/painting-quotation-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserDetailsComponent } from './admin/user-details/user-details.component';


@NgModule({
  declarations: [
    AddPictureComponent,
    AddPaintingComponent,
    PicturePurchaseListComponent,
    PaintingPurchaseListComponent,
    PictureListComponent,
    PaintingListComponent,
    PaintingQuotationListComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
