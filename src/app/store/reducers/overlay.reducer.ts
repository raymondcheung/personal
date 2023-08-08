import { createReducer, on } from '@ngrx/store';

import { setProjects } from '../actions/github.action';
import { AppState } from '../state/state';
import { Project } from 'src/app/models/project';
import { setOverlayVisible } from '../actions/overlay.action';

export interface OverlayState {
  visible: boolean;
}

export const initialState: OverlayState = {
  visible: false,
};

export const overlayReducer = createReducer(
  initialState,
  on(setOverlayVisible, (state, { visible }) => ({...state, visible}))
);