import { Injectable } from '@angular/core';
// Service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// interfaces
import { IRS_Marital_status } from '../_models/IRS_Marital_status';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MaritalStatusService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMaritalStates(): Observable<IRS_Marital_status[]> {
    return this.http.get<IRS_Marital_status[]>(
      this.baseUrl + '/IRS_Marital_status'
    );
  }
}
