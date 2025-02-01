import { createSelector } from "reselect";

const selectState = state => state.profilePage;

export const getStatusSelector = createSelector(selectState, state => state.status);

export const getProfileSelector = createSelector(selectState, state => state.profile);
