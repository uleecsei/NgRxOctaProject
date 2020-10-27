import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { OktaAuthService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { Store } from '@ngrx/store';
import { signIn } from '../../shared/store/auth/auth.actions';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.min(4), Validators.required])
  });
  isAuthenticated: boolean;

  constructor(private authService: AuthService, public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  get username(): AbstractControl {
    return this.form.get('username');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  onSubmit() {
    this.authService.login(this.form.getRawValue()).subscribe((i) => {
        console.log(i)
    });
    // this.store.dispatch(signIn(this.form.getRawValue()));
    // this.oktaAuth.login('https://dev-6767126.okta.com/api/v1/authn', {
    //   username: 'oleksiibuchko79@gmail.com',
    //   password: 'Buchko987123',
    //   options: {
    //     multiOptionalFactorEnroll: true,
    //     warnBeforePasswordExpired: true
    //   }
    // });
  }

  loginisSuccess() {
    this.oktaAuth.loginRedirect('/profile');
  }
}
