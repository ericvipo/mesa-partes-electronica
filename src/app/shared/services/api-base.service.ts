import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOMAIN } from '@environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  constructor(private http: HttpClient) {}

  post(path: string, body: object): Observable<any> {
    return this.http.post(DOMAIN + path, body, httpOptions);
  }

  get(path: string): Observable<any> {
    return this.http.get(DOMAIN + path, httpOptions);
  }

  put(path: string, body: object): Observable<any> {
    return this.http.put(DOMAIN + path, body, httpOptions);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(DOMAIN + path, httpOptions);
  }
}
