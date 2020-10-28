import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected environment = environment;
  private httpClient: HttpClient;

  protected get apiUrl(): string {
    return this.environment.oktaAPI;
  }

  constructor(protected injector: Injector) {
    this.httpClient = injector.get(HttpClient);
  }


  get<T>(path: string, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/api/v1/${path}/`, options);
  }

  post<T>(path: string, body: any, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/api/v1/${path}/`, body, options);
  }

  patch<T>(path: string, body: any, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.patch<T>(`${this.apiUrl}/api/v1/${path}/`, body, options);
  }

  put<T>(path: string, body: any, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/api/v1/${path}/`, body);
  }

  delete<T>(path: string, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}/api/v1/${path}/`, options);
  }
}
