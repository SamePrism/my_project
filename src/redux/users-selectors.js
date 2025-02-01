import { createSelector } from "reselect";
const selectState = (state) => state.usersPage;

export const getUsersSelector = createSelector(selectState, state => state.users); 

export const getTotalUsersCountSelector = createSelector(selectState, state => state.totalUsersCount);

export const getPageSizeSelector = createSelector(selectState, state => state.pageSize);

export const getCurrentPageSelector = createSelector(selectState, state => state.currentPage);

export const getIsFetchingSelector = createSelector(selectState, state => state.inProgress);

export const getFollowingInProgressSelector = createSelector(selectState, state => state.followingInProgress);
