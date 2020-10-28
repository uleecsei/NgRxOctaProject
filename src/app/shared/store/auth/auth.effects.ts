import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as authActions from './auth.actions';
import { IAppState } from '../../interfaces/app-state.interface';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {

  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.signIn),
    switchMap(({ username, password }) => {
      return this.authService.login({ username, password }).pipe(
        map(() => authActions.signInSuccess()),
        catchError((error) => {
          this.toastr.error('Oops, login failed');
          return of(authActions.signInFailure());
        }),
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<IAppState>,
  ) {}
}
