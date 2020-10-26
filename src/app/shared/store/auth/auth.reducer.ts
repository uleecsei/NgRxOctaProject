import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export const authStateKey = 'auth';


export interface IUser {
  userId: string;
  externalId: string;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  phone: string;
  createdAt: number;
  updatedAt: number;
  superUserId: string;
}

export interface IAuthState {
  authorization: boolean;
  isResetPasswordTriggered: boolean;
  isTriggeringPasswordReset: boolean;
  newPasswordRequired: boolean;
  user: IUser;
  redirectAfterSignIn: string;
}

export const initialState: IAuthState = {
  authorization: false,
  isResetPasswordTriggered: false,
  isTriggeringPasswordReset: false,
  newPasswordRequired: false,
  user: null,
  redirectAfterSignIn: null,
};

export function authReducer(state: IAuthState | undefined, action: Action): IAuthState {
  return reducer(state, action);
}

const reducer = createReducer<IAuthState>(
  initialState,

  on(authActions.signIn, state => ({
    ...state,
    authorization: true,
  })),

  on(authActions.signInSuccess, state => ({
    ...state,
    authorization: false,
    redirectAfterSignIn: null,
  })),

  on(authActions.signInFailure, (state, { newPasswordRequired }) => ({
    ...state,
    newPasswordRequired,
    authorization: false,
  })),

  on(authActions.signOut, state => initialState),

  on(authActions.loadUserSuccess, (state) => ({
    ...state
  })),

  on(authActions.completeNewPasswordChallenge, state => ({
    ...state,
    authorization: true,
  })),

  on(authActions.completeNewPasswordChallengeFailure, state => ({
    ...state,
    authorization: false,
  })),

  on(authActions.sendResetPasswordCode, state => ({
    ...state,
    isTriggeringPasswordReset: true,
  })),

  on(authActions.sendResetPasswordCodeSuccess, state => ({
    ...state,
    isResetPasswordTriggered: true,
    isTriggeringPasswordReset: false,
  })),

  on(authActions.sendResetPasswordCodeFailure, state => ({
    ...state,
    isTriggeringPasswordReset: false,
  })),

  on(authActions.saveRedirectAfterSignIn, (state, { link }) => ({
    ...state,
    redirectAfterSignIn: link,
  })),
);
