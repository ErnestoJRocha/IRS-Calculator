import { Injectable } from '@angular/core';
// Service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// interfaces
import { IRS_Calc } from '../_models/IRS_Calc';
import { IRS_Calc_Resp } from '../_models/IRS_Calc_Resp';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class IrsCalcService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getIrs(irsUser: IRS_Calc): Observable<IRS_Calc_Resp> {
    return this.http.post<IRS_Calc_Resp>(
      this.baseUrl + '/IrsCalc',
      irsUser,
      httpOptions
    );
  }
}
