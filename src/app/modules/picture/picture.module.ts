import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { PictureCardComponent } from './picture-card/picture-card.component';


@NgModule({
  declarations: [
    PictureCardComponent
  ],
  imports: [
    CommonModule,
    PictureRoutingModule
  ]
})
export class PictureModule { }
