import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://dev-6767126.okta.com';
  private options = {
    multiOptionalFactorEnroll: true,
    warnBeforePasswordExpired: true
  };

  constructor(private http: HttpClient) { }

  // TODO add model
  login(credentials: {username: string, password: string}): Observable<any> {
   return  this.http.post(`${(this.url)}/api/v1/authn`, {...credentials, options: this.options});
  }

  register(options: {name: string, email: string, password: string}) {
    console.log(options);
  }
  resetPassword(options: {email: string}) {
    console.log(options);
  }
  updatePassword(options: {password}) {
    console.log(options);
  }
}
