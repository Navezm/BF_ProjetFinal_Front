import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { PictureViewComponent } from './picture-view/picture-view.component';
import { EventComponent } from './event/event.component';
import { TravelComponent } from './travel/travel.component';
import { FoodComponent } from './food/food.component';
import { PortraitComponent } from './portrait/portrait.component';


@NgModule({
  declarations: [
    PictureViewComponent,
    EventComponent,
    TravelComponent,
    FoodComponent,
    PortraitComponent
  ],
  imports: [
    CommonModule,
    PictureRoutingModule
  ]
})
export class PictureModule { }
