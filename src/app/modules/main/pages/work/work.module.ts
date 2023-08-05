import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { TruncatePipe } from 'src/app/pipes/truncate/truncate.pipe';
import { sortProjectsByDatePipe } from 'src/app/pipes/sort-projects-by-date/sort-projects-by-date.pipe';

const routes: Routes = [
  {
    path: '',
    component: WorkComponent
  }
];

@NgModule({
  declarations: [
    WorkComponent,
    TruncatePipe,
    sortProjectsByDatePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    WorkRoutingModule,
    MatGridListModule
  ]
})
export class WorkModule { }
