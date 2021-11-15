import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationViewComponent } from './quotation-view/quotation-view.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    QuotationViewComponent
  ],
  imports: [
    CommonModule,
    QuotationRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuotationModule { }
