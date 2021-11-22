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
import { PaintingDetailsComponent } from './painting/painting-details/painting-details.component';
import { PictureDetailsComponent } from './picture/picture-details/picture-details.component';
import { PaintingPurchaseDetailsComponent } from './painting/painting-purchase-details/painting-purchase-details.component';
import { PicturePurchaseDetailsComponent } from './picture/picture-purchase-details/picture-purchase-details.component';
import { PaintingQuotationDetailsComponent } from './painting/painting-quotation-details/painting-quotation-details.component';
import { PaintingFormComponent } from './form/painting/painting-form/painting-form.component';
import { PictureFormComponent } from './form/picture/picture-form/picture-form.component';
import { PaintingPurchaseFormComponent } from './form/painting/painting-purchase-form/painting-purchase-form.component';
import { PaintingQuotationFormComponent } from './form/painting/painting-quotation-form/painting-quotation-form.component';
import { PicturePurchaseFormComponent } from './form/picture/picture-purchase-form/picture-purchase-form.component';


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
    UserDetailsComponent,
    PaintingDetailsComponent,
    PictureDetailsComponent,
    PaintingPurchaseDetailsComponent,
    PicturePurchaseDetailsComponent,
    PaintingQuotationDetailsComponent,
    PaintingFormComponent,
    PictureFormComponent,
    PaintingPurchaseFormComponent,
    PaintingQuotationFormComponent,
    PicturePurchaseFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
