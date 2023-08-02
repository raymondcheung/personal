import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { NowComponent } from './now.component';
import { NowRoutingModule } from './now-routing.module';

@NgModule({
  declarations: [
    NowComponent
  ],
  imports: [
    NowRoutingModule,
    CommonModule
  ]
})
export class NowModule { }
