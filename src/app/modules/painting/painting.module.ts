import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingRoutingModule } from './painting-routing.module';
import { PaintingViewComponent } from './painting-view/painting-view.component';
import { LinesComponent } from './lines/lines.component';
import { AbstractComponent } from './abstract/abstract.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PaintingViewComponent,
    LinesComponent,
    AbstractComponent
  ],
    imports: [
        CommonModule,
        PaintingRoutingModule,
        SharedModule
    ]
})
export class PaintingModule { }
