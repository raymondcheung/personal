import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: 'now', loadChildren: () => import('./modules/main/pages/now/now.module').then(m => m.NowModule) },
  { path: 'tech', loadChildren: () => import('./modules/main/pages/tech/tech.module').then(m => m.TechModule) },
  { path: 'work', loadChildren: () => import('./modules/main/pages/work/work.module').then(m => m.WorkModule) },
  { path: '', loadChildren: () => import('./modules/main/pages/home/home.module').then(m => m.HomeModule)},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
