import { createReducer, on } from '@ngrx/store';

import { setProjects } from '../actions/github.action';
import { AppState } from '../state/state';
import { Project } from 'src/app/models/project';

export interface GithubState {
  projects: Project[];
}

export const initialState: AppState = {
  projects: []
};

export const githubReducer = createReducer(
  initialState,
  on(setProjects, (state, { projects }) => ({...state, projects}))
);