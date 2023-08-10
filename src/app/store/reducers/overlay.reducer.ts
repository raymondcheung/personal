import { createReducer, on } from '@ngrx/store';

import { setProjects } from '../actions/github.action';
import { AppState } from '../state/state';
import { Project } from 'src/app/models/project';
import { toggleOverlayVisible } from '../actions/overlay.action';

export interface OverlayState {
  visible: boolean;
}

export const initialState: OverlayState = {
  visible: false,
};

export const overlayReducer = createReducer(
  initialState,
  on(toggleOverlayVisible, (state) => ({...state, visible: !state.visible}))
);