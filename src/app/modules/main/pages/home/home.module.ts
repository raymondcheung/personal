import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { WelcomeTileComponent } from './tiles/welcome/welcome-tile.component';
import { EyeTileComponent } from './tiles/eye/eye-tile.component';
import { NowTileComponent } from './tiles/now/now-tile.component';
import { WorkTileComponent } from './tiles/work/work-tile.component';
import { ContactTileComponent } from './tiles/contact/contact-tile.component';
import { ProjectTileComponent } from './tiles/project/project-tile.component';
import { LinkedinTileComponent } from './tiles/linkedin/linkedin-tile.component';
import { GithubTileComponent } from './tiles/github/github-tile.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeTileComponent,
    EyeTileComponent,
    NowTileComponent,
    WorkTileComponent,
    ContactTileComponent,
    ProjectTileComponent,
    LinkedinTileComponent,
    GithubTileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    DragDropModule
  ]
})
export class HomeModule { }
