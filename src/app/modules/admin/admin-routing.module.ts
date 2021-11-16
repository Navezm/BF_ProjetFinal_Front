import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminModule} from "./admin.module";
import {AdminViewComponent} from "./admin/admin-view/admin-view.component";

const routes: Routes = [
  { path: '', component: AdminViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
