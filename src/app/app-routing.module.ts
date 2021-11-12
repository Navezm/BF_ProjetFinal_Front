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
      .then(t => t.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
