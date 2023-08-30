import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticationService } from "@services/authentication.service";
import { logIn, loggedIn } from "@store/actions/authentication.action";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) {}

  logIn$ = createEffect(() => this.actions$.pipe(
    ofType(logIn),
    exhaustMap((payload) => this.authenticationService.login(payload.username, payload.password)
      .pipe(
        map((successful: boolean) => (loggedIn))
      ))
    )
  );
}