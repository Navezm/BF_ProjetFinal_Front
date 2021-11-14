import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', loadChildren: () => import('./modules/home/home.module')
      .then(t => t.HomeModule) },
  { path: 'about', loadChildren: () => import('./modules/about/about.module')
      .then(t => t.AboutModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module')
      .then(t => t.ContactModule) },
  { path: 'picture', loadChildren: () => import('./modules/picture/picture.module')
      .then(t => t.PictureModule) },
  { path: 'painting', loadChildren: () => import('./modules/painting/painting.module')
      .then(t => t.PaintingModule)},
  { path: 'shop', loadChildren: () => import('./modules/shop/shop.module')
      .then(t => t.ShopModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
