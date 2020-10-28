import { createAction, props } from '@ngrx/store';

export const signIn = createAction('[Auth] Sign In', props<{ username: string, password: string }>());
export const signInSuccess = createAction('[Auth] Sign In Success');
export const signInFailure = createAction('[Auth] Sign In Failure');

// export const signUp = createAction('[Auth Form] Sign Up', props<{ email: string, password: string, name: string }>());
// export const signUpSuccess = createAction('[Auth API] Sign Up Success');
// export const signUpFailure = createAction('[Auth API] Sign Up Failure');

