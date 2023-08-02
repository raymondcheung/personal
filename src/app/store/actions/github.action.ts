import { createAction, props } from '@ngrx/store';

import { Project } from 'src/app/models/project';

// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');

export const setProjects = createAction(
  '[Github] Set Projects',
  props<{ projects: Project[] }>()  
);