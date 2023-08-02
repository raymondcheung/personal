import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechComponent } from './tech.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TechComponent
  }
];

@NgModule({
  declarations: [
    TechComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TechModule { }
