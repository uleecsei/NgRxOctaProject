import { NgModule } from '@angular/core';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

const config = {
  clientId: '0oafz7nnOqaTYO8cf5d5',
  issuer: 'https://dev-6767126.okta.com/oauth2/default',
  redirectUri: 'http://localhost:8080/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

@NgModule({
  imports: [
    OktaAuthModule,
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config },
  ],
})
export class OktaModule { }
