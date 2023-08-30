import { createAction, props } from '@ngrx/store';

export const logIn = createAction(
  '[Authentication, User] Log In',
  props<{ username: string, password: string }>()
);

export const loggedIn = createAction(
  '[Authentication, API] Logged In'
);