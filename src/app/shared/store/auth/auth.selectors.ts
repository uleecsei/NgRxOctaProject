import { createSelector } from '@ngrx/store';

export const selectAuthState = (state) => state;

export const selectUser = createSelector(
  selectAuthState,
  state => state.auth && state.auth.userData
);
