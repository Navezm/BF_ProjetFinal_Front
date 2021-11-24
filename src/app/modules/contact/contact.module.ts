import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContactViewComponent,
    ContactFormComponent
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContactModule { }
