import { createAction, props } from '@ngrx/store';

export const setOverlayVisible = createAction(
  '[Overlay] Set Overlay Visible',
  props<{ visible: boolean }>()  
);