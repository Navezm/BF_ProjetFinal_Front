import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingRoutingModule } from './painting-routing.module';
import { PaintingViewComponent } from './painting-view/painting-view.component';
import { LinesComponent } from './lines/lines.component';
import { AbstractComponent } from './abstract/abstract.component';
import {SharedModule} from "../shared/shared.module";
import { AllPaintingComponent } from './all-painting/all-painting.component';



@NgModule({
  declarations: [
    PaintingViewComponent,
    LinesComponent,
    AbstractComponent,
    AllPaintingComponent
  ],
    imports: [
        CommonModule,
        PaintingRoutingModule,
        SharedModule
    ],
  providers: [
  ]
})
export class PaintingModule { }
