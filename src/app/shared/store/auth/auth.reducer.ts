import { Action, createReducer, on } from '@ngrx/store';

import * as authActions from './auth.actions';
import { IUserData } from '../../models/user-data.interface';

export interface IAuthState {
  authorization: boolean;
  userData: IUserData;
}

export const initialState: IAuthState = {
  authorization: false,
  userData: null,
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

  on(authActions.signInSuccess, (state, { user }) => ({
      ...state,
      userData: user,
      authorization: false,
    })
  ),

  on(authActions.signInFailure, (state) => ({
    ...state,
    authorization: false,
  })),
);
