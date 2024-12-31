import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HighSchoolsState } from './high-schools.reducer';

export const selectHighSchoolsState = createFeatureSelector<HighSchoolsState>('highSchools');

export const selectHighSchools = createSelector(
  selectHighSchoolsState,
  (state) => state.highSchools
);

export const selectSatScore = createSelector(
  selectHighSchoolsState,
  (state) => state.selectedSchoolSatScore
);

export const selectLoading = createSelector(
  selectHighSchoolsState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectHighSchoolsState,
  (state) => state.error
);
