import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingRoutingModule } from './painting-routing.module';
import { PaintingViewComponent } from './painting-view/painting-view.component';
import { LinesComponent } from './lines/lines.component';
import { AbstractComponent } from './abstract/abstract.component';


@NgModule({
  declarations: [
    PaintingViewComponent,
    LinesComponent,
    AbstractComponent
  ],
  imports: [
    CommonModule,
    PaintingRoutingModule
  ]
})
export class PaintingModule { }
