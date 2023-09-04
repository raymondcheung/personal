import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authenticationGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from '../modules/auth/pages/login/login.component';
import { RouterTestingHarness } from '@angular/router/testing';

describe('authenticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authenticationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthenticationService
      ]
    });
    const routes = [{
      path: "login",
      canActivate: [authenticationGuard],
      component: LoginComponent,
    }]
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should redirect to logout page if already logged in', async () => {
    await RouterTestingHarness.create('login');
    expect()
  })
});
