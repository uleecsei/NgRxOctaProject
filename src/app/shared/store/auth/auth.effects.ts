import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as authActions from './auth.actions';
import { AuthService } from '../../../core/services/auth.service';

@Injectable()
export class AuthEffects {

  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.signIn),
    switchMap(({ username, password }) => {
      return this.authService.login({ username, password }).pipe(
        map((userSession) => {
          this.ngZone.run(() => {
            this.authService.setToken(userSession.sessionToken);
            this.router.navigate(['/home']);
          });

          return authActions.signInSuccess(userSession._embedded);
        }),
        catchError((error) => {
          this.toastr.error('Oops, login failed');
          return of(authActions.signInFailure());
        }),
      );
    }),
  ));

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.signUp),
    switchMap(({name, username, password}) => {
      return this.authService.register({name, username, password}).pipe(
        map(() => authActions.signUpSuccess()),
        catchError((error) => {
          this.toastr.error('Oops, register failed');
          return of(authActions.signUpFailure());
        })
      );
    }),
  ));

  resetPassword$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.resetPassword),
    switchMap(({username}) => {
      return this.authService.resetPassword({username}).pipe(
        map(() => authActions.resetPasswordSuccess()),
        catchError((error) => {
          this.toastr.error('Oops, reset password failed');
          return of(authActions.resetPasswordFailure());
        })
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store,
    private ngZone: NgZone
  ) {}
}
