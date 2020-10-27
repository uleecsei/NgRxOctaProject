import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAppState } from '../../interfaces/app-state.interface';

import { IAuthState, authStateKey } from './auth.reducer';

export const selectAuthState = (state: IAuthState) => state;

export const selectUser = createSelector(
  selectAuthState,
  state => state.user,
);

// export const selectIsAuthorized = createSelector(
//   selectUser,
//   Boolean,
// );
//
// export const selectAuthorization = createSelector(
//   selectAuthState,
//   state => state.authorization,
// );
//
// export const selectUserAction = createSelector(
//   selectAuthState,
//   state => state.userAction,
// );
//
// export const selectNewPasswordRequired = createSelector(
//   selectAuthState,
//   state => state.newPasswordRequired,
// );
//
// export const selectIsResetPasswordTriggered = createSelector(
//   selectAuthState,
//   state => state.isResetPasswordTriggered,
// );
//
export const selectRedirectAfterSignIn = createSelector(
  selectAuthState,
  state => state.redirectAfterSignIn,
);
//
// export const selectIsTriggeringPasswordReset = createSelector(
//   selectAuthState,
//   state => state.isTriggeringPasswordReset,
// );
