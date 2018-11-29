import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
    path: 'home',
    component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
