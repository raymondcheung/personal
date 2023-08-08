import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppState } from "../state/state";
import { OverlayState } from "../reducers/overlay.reducer";

export const selectState = (state: AppState) => state;

export const selectOverlayState = createFeatureSelector<OverlayState>('overlay');
 
export const selectIsOverlayVisible = createSelector(
  selectOverlayState,
  (state: OverlayState) => state.visible
);