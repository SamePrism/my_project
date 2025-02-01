import { createSelector } from "reselect";

const selectState = state => state.auth;

export const getIsAuthSelector = createSelector(selectState, state => state.isAuth);

export const getCaptchaUrlSelector = createSelector(selectState, state => state.captchaUrl);

export const getErrorSelector = createSelector(selectState, state => state.error);
