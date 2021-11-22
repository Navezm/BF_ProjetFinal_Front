import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { PictureViewComponent } from './picture-view/picture-view.component';
import { EventComponent } from './event/event.component';
import { TravelComponent } from './travel/travel.component';
import { FoodComponent } from './food/food.component';
import { PortraitComponent } from './portrait/portrait.component';
import {SharedModule} from "../shared/shared.module";
import { AllPictureComponent } from './all-picture/all-picture.component';


@NgModule({
  declarations: [
    PictureViewComponent,
    EventComponent,
    TravelComponent,
    FoodComponent,
    PortraitComponent,
    AllPictureComponent
  ],
  imports: [
    CommonModule,
    PictureRoutingModule,
    SharedModule
  ]
})
export class PictureModule { }
