import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//all our component 
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }