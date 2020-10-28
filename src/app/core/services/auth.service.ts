import { Injectable, Injector } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

import { IOktaUserSession } from '../../shared/models/okta-user-session.interface';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{
  private tokenStoreKey = 'token';
  private loginOptions = {
    multiOptionalFactorEnroll: true,
    warnBeforePasswordExpired: true
  };
  private resetPasswordOptions = {
    factorType: 'EMAIL',
    relayState: ''
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  login({username, password}): Observable<IOktaUserSession> {
    return super.post<IOktaUserSession>('authn', {username, password, options: this.loginOptions});
  }

  register({name, username, password}): Observable<any> {
    return EMPTY;
  }

  resetPassword({username}): Observable<any> {
    return super.post<any>('authn/recovery/password', {username, ...this.resetPasswordOptions});
  }

  setToken(token): void {
    localStorage.setItem(this.tokenStoreKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenStoreKey);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
