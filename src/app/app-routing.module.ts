import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module')
      .then(t => t.HomeModule) },
  { path: 'about', loadChildren: () => import('./modules/about/about.module')
      .then(t => t.AboutModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module')
      .then(t => t.ContactModule) },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
