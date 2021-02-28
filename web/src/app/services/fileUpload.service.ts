import { Injectable } from '@angular/core';
// Service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fileUpload(excel) {
    return this.http.post<any>(this.baseUrl + '/FileUpload', excel, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
