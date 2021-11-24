import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { FoodComponent } from './food/food.component';
import { PictureViewComponent } from './picture-view/picture-view.component';
import { PortraitComponent } from './portrait/portrait.component';
import { TravelComponent } from './travel/travel.component';
import {AllPictureComponent} from "./all-picture/all-picture.component";

const routes: Routes = [
  { path: '', component: PictureViewComponent, children: [
    { path: 'event', component: EventComponent },
    { path: 'travel', component: TravelComponent },
    { path: 'food', component: FoodComponent },
    { path: 'portrait', component: PortraitComponent },
    { path: 'all', component: AllPictureComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureRoutingModule { }
