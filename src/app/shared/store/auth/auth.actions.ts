import { createAction, props } from '@ngrx/store';

export const signIn = createAction('[Auth Form] Sign In', props<{ email: string, password: string }>());
export const signInSuccess = createAction('[Auth API] Sign In Success');
export const signInFailure = createAction('[Auth API] Sign In Failure', props<{ newPasswordRequired: boolean }>());

export const signUp = createAction('[Auth Form] Sign Up', props<{ email: string, password: string, name: string }>());
export const signUpSuccess = createAction('[Auth API] Sign Up Success');
export const signUpFailure = createAction('[Auth API] Sign Up Failure');

export const saveRedirectAfterSignIn = createAction('[Auth API] Save redirect URL', props<{ link: string }>());

export const loadUser = createAction('[Auth] Load User', props<{ skipInterceptorRedirect: boolean }>());
export const loadUserSuccess = createAction('[Auth API] Load User Success');
export const loadUserFailure = createAction('[Auth API] Load User Failure');

export const signOut = createAction('[Auth] Sign Out', props<{ redirect: boolean }>());
export const signOutSuccess = createAction('[Auth API] Sign Out Success');
export const signOutFailure = createAction('[Auth API] Sign Out Failure');

export const sendResetPasswordCode = createAction('[Auth] Send Reset Password Code', props<{ email: string }>());
export const sendResetPasswordCodeSuccess = createAction('[Auth API] Send Reset Password Code Success');
export const sendResetPasswordCodeFailure = createAction('[Auth API] Send Reset Password Code Failure');

export const confirmPassword = createAction('[Auth Form] Confirm Password', props<{ username: string, code: string, password: string }>());
export const confirmPasswordSuccess = createAction('[Auth Form] Confirm Password Success');
export const confirmPasswordFailure = createAction('[Auth Form] Confirm Password Failure');

export const completeNewPasswordChallenge = createAction(
  '[Auth] Complete New Password Challenge',
  props<{ password: string }>(),
);

export const completeNewPasswordChallengeFailure = createAction('[Auth API] Complete New Password Challenge Failure');

export const userSessionTerminated = createAction('[Auth API] User Session Terminated');
