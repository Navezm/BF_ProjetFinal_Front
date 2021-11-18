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
import {UserDetailsComponent} from "./admin/user-details/user-details.component";
import {PaintingDetailsComponent} from "./painting/painting-details/painting-details.component";
import {PictureDetailsComponent} from "./picture/picture-details/picture-details.component";
import {PaintingPurchaseDetailsComponent} from "./painting/painting-purchase-details/painting-purchase-details.component";
import {PicturePurchaseDetailsComponent} from "./picture/picture-purchase-details/picture-purchase-details.component";
import {PaintingQuotationDetailsComponent} from "./painting/painting-quotation-details/painting-quotation-details.component";
import {PaintingFormComponent} from "./form/painting/painting-form/painting-form.component";
import {PictureFormComponent} from "./form/picture/picture-form/picture-form.component";
import {PaintingPurchaseFormComponent} from "./form/painting/painting-purchase-form/painting-purchase-form.component";
import {PaintingQuotationFormComponent} from "./form/painting/painting-quotation-form/painting-quotation-form.component";
import {PicturePurchaseFormComponent} from "./form/picture/picture-purchase-form/picture-purchase-form.component";

const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'painting', children: [
      { path: 'add', component: AddPaintingComponent },
      { path: 'list', component: PaintingListComponent },
      { path: 'purchase', component: PaintingPurchaseListComponent },
      { path: 'quotation', component: PaintingQuotationListComponent },
      { path: ':id', component: PaintingDetailsComponent },
      { path: 'purchase/:id', component: PaintingPurchaseDetailsComponent },
      { path: 'quotation/:id', component: PaintingQuotationDetailsComponent },
      { path: 'edit/:id', component: PaintingFormComponent },
      { path: 'purchase/edit/:id', component: PaintingPurchaseFormComponent },
      { path: 'quotation/edit/:id', component: PaintingQuotationFormComponent }
    ] },
  { path: 'picture', children: [
      { path: 'add', component: AddPictureComponent },
      { path: 'list', component: PictureListComponent },
      { path: 'purchase', component: PicturePurchaseListComponent },
      { path: ':id', component: PictureDetailsComponent },
      { path: 'purchase/:id', component: PicturePurchaseDetailsComponent },
      { path: 'edit/:id', component: PictureFormComponent },
      { path: 'purchase/edit/:id', component: PicturePurchaseFormComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
