import { createReducer, on } from '@ngrx/store';

import { setProjects } from '../actions/github.action';
import { Project } from 'src/app/models/project';

export interface GithubState {
  projects: Project[];
}

export const initialState: GithubState = {
  projects: []
};

export const githubReducer = createReducer(
  initialState,
  on(setProjects, (state, { projects }) => ({...state, projects}))
);