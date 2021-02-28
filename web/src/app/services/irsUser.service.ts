import { Injectable } from '@angular/core';
// Service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// interfaces
import { IRS_User } from '../_models/IRS_User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class IrsUserService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getIrsUsers(): Observable<IRS_User[]> {
    return this.http.get<IRS_User[]>(this.baseUrl + '/IRS_User');
  }
  addIrsUsers(irsUser: IRS_User): Observable<IRS_User> {
    return this.http.post<IRS_User>(
      this.baseUrl + '/IRS_User',
      irsUser,
      httpOptions
    );
  }
  editIrsUsers(irsUser: IRS_User, id: number): Observable<IRS_User> {
    return this.http.put<IRS_User>(
      this.baseUrl + `/IRS_User/${id}`,
      irsUser,
      httpOptions
    );
  }
}
