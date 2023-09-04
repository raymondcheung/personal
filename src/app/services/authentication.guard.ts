import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

export const authenticationGuard: CanActivateFn  = () => {
  const authService = inject(AuthenticationService);
  return authService.isLoggedIn();
}
