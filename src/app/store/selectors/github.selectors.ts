import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppState } from "../state/state";
import { GithubState } from "../reducers/github.reducer";

export const selectState = (state: AppState) => state;

export const selectGithubState = createFeatureSelector<GithubState>('github');
 
export const selectProjects = createSelector(
  selectGithubState,
  (state: GithubState) => state.projects
);