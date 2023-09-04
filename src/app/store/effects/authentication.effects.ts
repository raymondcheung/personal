import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AuthenticationService } from "@services/authentication.service";
import { failedLogin, logIn, loggedIn } from "@store/actions/authentication.action";
import { exhaustMap, map, take, tap } from "rxjs";

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService,
    private store: Store
  ) {}

  logIn$ = createEffect(() => this.actions$.pipe(
    ofType(logIn),
    tap((payload) => {
      this.authenticationService.login(payload.username, payload.password).pipe(take(1)).subscribe((status) => {
        if (status) {
          this.store.dispatch(loggedIn());
        } else {
          this.store.dispatch(failedLogin())
        }
      })
    })
  ), { dispatch: false})

}
