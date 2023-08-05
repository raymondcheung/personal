import { createAction, props } from '@ngrx/store';

import { Project } from 'src/app/models/project';

export const setProjects = createAction(
  '[Github] Set Projects',
  props<{ projects: Project[] }>()  
);