import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as authActions from './auth.actions';
import { selectRedirectAfterSignIn } from './auth.selectors';
import { Action, Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state.interface';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {

  // signIn$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.signIn),
  //   withLatestFrom(this.store.select(selectRedirectAfterSignIn)),
  //   switchMap(([action, redirectAfterSignIn]) => {
  //     this.authService.login()
  //   });
  // );

  // signUp$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.signUp),
  //   withLatestFrom(this.store.select(selectRedirectAfterSignIn)),
  //   switchMap(([action, redirectAfterSignIn]) => {
  //     return this.userAPIService.existEmail(action.email).pipe(
  //       switchMap((responce: IResidentExist) => {
  //         if (!responce.residentExists) {
  //           return this.authService.signUp(action.email, action.password);
  //         }
  //
  //         return of(authActions.signUpFailure());
  //       }),
  //       switchMap(() => this.authService.signIn({ email: action.email, password: action.password })),
  //       map(() => {
  //         this.ngZone.run(() => {
  //           this.store.dispatch(authActions.loadUser({ skipInterceptorRedirect: false }));
  //           this.router.navigate([redirectAfterSignIn || '/more-info-request']);
  //         });
  //         return authActions.signInSuccess();
  //       }),
  //       catchError((error) => {
  //         this.ngZone.run(() => {
  //           const message: string = error?.message ? error.message : 'Incorrect email or password';
  //           this.myndToastrService.error(message);
  //         });
  //
  //         return of(authActions.signUpFailure());
  //       }),
  //     );
  //   }),
  // ));
  //
  // applicationStarted$ = createEffect(() => this.actions$.pipe(
  //   ofType(systemActions.applicationStarted),
  //   map(() => authActions.loadUser({ skipInterceptorRedirect: true })),
  // ));
  //
  // signOut$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.signOut),
  //   switchMap((action) => {
  //     return this.authService.signOut().pipe(
  //       map(() => {
  //         if (action.redirect) {
  //           this.router.navigate((['/auth']));
  //         }
  //
  //         return authActions.signOutSuccess();
  //       }),
  //     );
  //   }),
  // ));
  //
  // loadUser$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.loadUser),
  //   switchMap(({ skipInterceptorRedirect }) => {
  //     return this.authService.getUser().pipe(
  //       switchMap(() => {
  //         return forkJoin([
  //           this.userAPIService.getUser(skipInterceptorRedirect),
  //           this.userAPIService.getUserAction(),
  //         ]);
  //       }),
  //       map(([user, userAction]) => {
  //         this.myndDataDogService.setUser(user.userId, [user.firstName, user.lastName].join(' '));
  //
  //         return authActions.loadUserSuccess({ user, userAction });
  //       }),
  //       catchError(() => {
  //         this.myndDataDogService.resetUser();
  //         return of(authActions.loadUserFailure());
  //       }),
  //     );
  //   }),
  // ));
  //
  // completeNewPasswordChallenge$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.completeNewPasswordChallenge),
  //   switchMap((action) => {
  //     return this.authService.completeNewPasswordChallenge(action.password).pipe(
  //       map(() => {
  //         this.ngZone.run(() => {
  //           this.store.dispatch(authActions.loadUser({ skipInterceptorRedirect: false }));
  //           this.router.navigate(['/']);
  //         });
  //
  //         return authActions.signInSuccess();
  //       }),
  //       catchError((error) => {
  //         this.myndToastrService.serverError(error);
  //         return of(authActions.completeNewPasswordChallengeFailure());
  //       }),
  //     );
  //   }),
  // ));
  //
  // sendResetPasswordCode$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.sendResetPasswordCode),
  //   switchMap((action) => {
  //     return this.authService.sendResetPasswordCode(action.email).pipe(
  //       map(() => {
  //         this.store.dispatch(authActions.sendResetPasswordCodeSuccess());
  //         this.myndToastrService.success('Thanks for submitting your email address! Please check your email to change your password');
  //         this.router.navigate(['/']);
  //         return authActions.signInSuccess();
  //       }),
  //       catchError((error) => {
  //         this.myndToastrService.error(this.getCognitoError(error) || 'Incorrect email or password');
  //
  //         return of(authActions.sendResetPasswordCodeFailure());
  //       }),
  //     );
  //   }),
  // ));
  //
  // confirmPassword$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.confirmPassword),
  //   switchMap((action) => {
  //     return this.authService.confirmPassword(action.username, action.code, action.password).pipe(
  //       map(() => {
  //         this.myndToastrService.success('Password Updated!');
  //         this.router.navigate(['/']);
  //         return authActions.confirmPasswordSuccess();
  //       }),
  //       catchError((error) => {
  //         this.myndToastrService.error(error.message);
  //
  //         return of(authActions.confirmPasswordFailure());
  //       }),
  //     );
  //   }),
  // ));
  //
  // addAdditionInfo$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.sendAddedInfo),
  //   withLatestFrom(this.store.select(selectAdditionalInfo)),
  //   switchMap(([action, additionalInfo]) => {
  //     const fullUserInfo = {
  //       ...additionalInfo,
  //       governmentIssuedDocumentFileId: action.fileId || additionalInfo.fileId,
  //     };
  //
  //     return this.userAPIService.submitAdditionInfo(fullUserInfo).pipe(
  //       map(() => {
  //         this.myndToastrService.success('Saved');
  //         this.router.navigate(['/home']);
  //         return authActions.addAdditionInfoSuccess();
  //       }),
  //       catchError((error) => {
  //         this.myndToastrService.error(error.message);
  //
  //         return of(authActions.addAdditionInfoFailure());
  //       }),
  //     );
  //   }),
  // ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    // private userAPIService: UserAPIService,
    private ngZone: NgZone,
    private router: Router,
    private store: Store<IAppState>,
  ) {}

  // getCognitoError(error?: { name?: string; message?: string }): string {
  //   if (!error || !error.name) {
  //     return null;
  //   }
  //
  //   switch (error.name) {
  //     case 'NotAuthorizedException':
  //       // tslint:disable-next-line:max-line-length
  //       return 'We\'re sorry. You do not have an account.';
  //
  //     default:
  //       return error.message;
  //   }
  // }
}
