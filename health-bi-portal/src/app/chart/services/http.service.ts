import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nursing } from '../models/entities/nursing.model';
import { Institutes } from '../models/entities/institutes.model';

@Injectable()
export class HttpService {
  readonly baseUrl: string = "https://datadashboard.health.gov.il/api";

  constructor(private http: HttpClient) { }

  getNursingData(): Observable<Nursing[]> {
    return this.http.get<any>(`${this.baseUrl}/checkup/nursing`);
  }

  getInstitutesData(): Observable<Institutes[]> {
    return this.http.get<any>(`${this.baseUrl}/experienceInstitutes/surveyPatientExperienceVariables`);
  }
}
