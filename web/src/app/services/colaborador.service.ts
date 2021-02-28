import { Injectable } from '@angular/core';
// Service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// interfaces
import { Sybase_Colaborador_Nivel } from '../_models/Sybase_Colaborador_Nivel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getColaboradores(): Observable<Sybase_Colaborador_Nivel[]> {
    return this.http.get<Sybase_Colaborador_Nivel[]>(
      this.baseUrl + '/Sybase_Colaborador_Nivel'
    );
  }
}
