import { Injectable } from '@angular/core';
// Service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// interfaces
import { IRS_Area } from '../_models/IRS_Area';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAreas(): Observable<IRS_Area[]> {
    return this.http.get<IRS_Area[]>(this.baseUrl + '/IRS_Area');
  }
}
