import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'projects',
    component: HomeComponent,
    data: {
      sort: 'projects'
    }
  },
  {
    path: 'contact',
    component: HomeComponent,
    data: {
      sort: 'contact'
    }
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }