import { Injectable } from '@angular/core';
// Service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// interfaces
import { IRS_Nivel } from '../_models/IRS_Nivel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NivelService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getNivels(): Observable<IRS_Nivel[]> {
    return this.http.get<IRS_Nivel[]>(this.baseUrl + '/IRS_Nivel');
  }
}
