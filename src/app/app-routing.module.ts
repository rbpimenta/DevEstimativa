import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {EstimativaListComponent} from './estimativa-list/estimativa-list.component';
import {HomeComponent} from './home/home.component';
import {EstimativaLoginComponent} from './estimativa-login/estimativa-login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'estimativa',
        component: EstimativaListComponent
      },
      {
        path: 'estimativa/login',
        component: EstimativaLoginComponent
      }
    ]
  }
];

@NgModule ({
  declarations: [],
  imports: [
    RouterModule.forRoot (routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
