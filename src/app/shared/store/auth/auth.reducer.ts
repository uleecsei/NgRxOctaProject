import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export const authStateKey = 'auth';


export interface IUser {
  email: string;
  password: string;
}

export interface IAuthState {
  authorization: boolean;
  user: IUser;
  redirectAfterSignIn: string;
}

export const initialState: IAuthState = {
  authorization: false,
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

  on(authActions.signInFailure, (state) => ({
    ...state,
    authorization: false,
  })),
);
