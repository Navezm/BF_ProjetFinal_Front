import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuotationViewComponent} from "./quotation-view/quotation-view.component";

const routes: Routes = [
  { path: '', component: QuotationViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
