import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as HighSchoolsActions from './high-schools.actions';
import { HighSchoolService } from '../core/high-school.service';

@Injectable()
export class HighSchoolsEffects {
  constructor(private actions$: Actions, private highSchoolService: HighSchoolService) {}

  loadHighSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HighSchoolsActions.loadHighSchools),
      mergeMap(() =>
        this.highSchoolService.getHighSchools().pipe(
          map((highSchools) => HighSchoolsActions.loadHighSchoolsSuccess({ highSchools })),
          catchError((error) => of(HighSchoolsActions.loadHighSchoolsFailure({ error })))
        )
      )
    )
  );

  loadSatScores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HighSchoolsActions.loadSatScores),
      mergeMap((action) =>
        this.highSchoolService.getSatScores(action.dbn).pipe(
          map((satScores) => HighSchoolsActions.loadSatScoresSuccess({ satScores })),
          catchError((error) => of(HighSchoolsActions.loadSatScoresFailure({ error })))
        )
      )
    )
  );
}
