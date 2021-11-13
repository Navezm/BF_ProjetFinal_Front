import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaintingViewComponent} from "./painting-view/painting-view.component";
import {LinesComponent} from "./lines/lines.component";
import {AbstractComponent} from "./abstract/abstract.component";

const routes: Routes = [
  { path: '', component: PaintingViewComponent, children: [
      { path: 'lines', component: LinesComponent },
      { path: 'abstract', component: AbstractComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingRoutingModule { }
