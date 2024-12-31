import { createAction, props } from '@ngrx/store';
import { HighSchool, SatScore } from './high-schools.models';

export const loadHighSchools = createAction('[High Schools] Load High Schools');
export const loadHighSchoolsSuccess = createAction(
  '[High Schools] Load High Schools Success',
  props<{ highSchools: HighSchool[] }>()
);
export const loadHighSchoolsFailure = createAction(
  '[High Schools] Load High Schools Failure',
  props<{ error: any }>()
);

export const loadSatScores = createAction(
  '[High Schools] Load SAT Scores',
  props<{ dbn: string }>()
);
export const loadSatScoresSuccess = createAction(
  '[High Schools] Load SAT Scores Success',
  props<{ satScores: SatScore }>()
);
export const loadSatScoresFailure = createAction(
  '[High Schools] Load SAT Scores Failure',
  props<{ error: any }>()
);
