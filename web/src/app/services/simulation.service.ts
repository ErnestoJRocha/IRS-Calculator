import { Injectable } from '@angular/core';
// Service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// interfaces
import { IRS_Simulation } from '../_models/IRS_Simulation';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSimulations(): Observable<IRS_Simulation[]> {
    return this.http.get<IRS_Simulation[]>(this.baseUrl + '/IRS_Simulation');
  }
  addSimulation(irsUser: IRS_Simulation): Observable<IRS_Simulation> {
    return this.http.post<IRS_Simulation>(
      this.baseUrl + '/IRS_Simulation',
      irsUser,
      httpOptions
    );
  }
  editSimulation(
    irsUser: IRS_Simulation,
    id: number
  ): Observable<IRS_Simulation> {
    return this.http.put<IRS_Simulation>(
      this.baseUrl + `/IRS_Simulation/${id}`,
      irsUser,
      httpOptions
    );
  }

  deleteSimulation(id: number): Observable<IRS_Simulation> {
    return this.http.delete<IRS_Simulation>(
      this.baseUrl + `/IRS_Simulation/${id}`
    );
  }
}
