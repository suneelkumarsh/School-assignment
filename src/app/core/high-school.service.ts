import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { catchError,  } from 'rxjs/operators';

import { HighSchool, SatScore } from '../state/high-schools.models';

@Injectable({
  providedIn: 'root',
})
export class HighSchoolService {
  private highSchoolsUrl = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
  private satScoresUrl = 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json';

  constructor(private http: HttpClient) {}

  getHighSchools(): Observable<HighSchool[]> {
    return this.http.get<HighSchool[]>(this.highSchoolsUrl);
  }

  getSatScore(dbn: string): Observable<SatScore | null> {
    return this.http
      .get<SatScore[]>(`${this.satScoresUrl}`)
      .pipe(
        map((scores: string | any[]) => {
         
          if (Array.isArray(scores) && scores.length > 0) {
            return scores[0];
          }
          return null;
        }),
      
      );
  }
  

}
