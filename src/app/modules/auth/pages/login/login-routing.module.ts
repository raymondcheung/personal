import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { authenticationGuard } from '@services/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [ authenticationGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }