import { createReducer, on } from '@ngrx/store';
import * as HighSchoolsActions from './high-schools.actions';
import { HighSchool, SatScore } from './high-schools.models';

export interface HighSchoolsState {
  highSchools: HighSchool[];
  selectedSchoolSatScore: SatScore | null;
  loading: boolean;
  error: string | null;
}

export const initialState: HighSchoolsState = {
  highSchools: [],
  selectedSchoolSatScore: null,
  loading: false,
  error: null,
};

export const highSchoolsReducer = createReducer(
  initialState,
  on(HighSchoolsActions.loadHighSchools, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(HighSchoolsActions.loadHighSchoolsSuccess, (state, { highSchools }) => ({
    ...state,
    highSchools,
    loading: false,
  })),
  on(HighSchoolsActions.loadHighSchoolsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(HighSchoolsActions.loadSatScores, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(HighSchoolsActions.loadSatScoresSuccess, (state, { satScores }) => ({
    ...state,
    selectedSchoolSatScore: satScores,
    loading: false,
  })),
  on(HighSchoolsActions.loadSatScoresFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
