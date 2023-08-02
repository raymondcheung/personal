import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NowComponent } from './now.component';

const routes: Routes = [
  {
    path: '',
    component: NowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NowRoutingModule { }