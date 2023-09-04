import { createReducer, on } from '@ngrx/store';
import { failedLogin, loggedIn } from '@store/actions/authentication.action';

export interface AuthenticationState {
  loggedIn: boolean;
}

export const initialState: AuthenticationState = {
  loggedIn: false,
};

export const authenticationReducer = createReducer(
  initialState,
  on(loggedIn, (state) => ({...state, loggedIn: true})),
  on(failedLogin, (state) => ({...state, loggedIn: false}))
);