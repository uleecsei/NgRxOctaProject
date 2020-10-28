import { createAction, props } from '@ngrx/store';
import { IUserData } from '../../models/user-data.interface';

export const signIn = createAction('[Auth] Sign In', props<{ username: string, password: string }>());
export const signInSuccess = createAction('[Auth] Sign In Success', props<{user: IUserData}>());
export const signInFailure = createAction('[Auth] Sign In Failure');

export const signUp = createAction('[Auth Form] Sign Up', props<{ username: string, password: string, name: string }>());
export const signUpSuccess = createAction('[Auth API] Sign Up Success');
export const signUpFailure = createAction('[Auth API] Sign Up Failure');

export const resetPassword = createAction('[Auth] Send Reset Password Code', props<{ username: string }>());
export const resetPasswordSuccess = createAction('[Auth API] Send Reset Password Code Success');
export const resetPasswordFailure = createAction('[Auth API] Send Reset Password Code Failure');

export const updatePassword = createAction('[Auth] Send Reset Password Code', props<{ password: string }>());
export const updatePasswordSuccess = createAction('[Auth API] Send Reset Password Code Success');
export const updatePasswordFailure = createAction('[Auth API] Send Reset Password Code Failure');
