import { UsersAPI } from "../API/api";

const toggleFollow = (id) => {
  return {
    type: "TOGGLE-FOLLOW",
    userId: id,
  };
};
const setUsers = (users) => {
  return {
    type: "SET-USERS",
    users: users,
  };
};
const setTotalUsersCount = (count) => {
  return {
    type: "GET-TOTAL-USERS-COUNT",
    count: count,
  };
};
export const setCurrentPage = (page) => {
  return {
    type: "SET-CURRENT-PAGE",
    page: page,
  };
};
const toggleProgress = (value) => {
  return {
    type: "TOGGLE-PROGRESS",
    value: value,
  };
};
const toggleFollowingProgress = (isFetching, id) => {
  return {
    type: "TOGGLE-FOLLOWING-PROGRESS",
    isFetching: isFetching,
    id: id,
  };
};

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleProgress(true));
  UsersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleProgress(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const followUser = (id) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, id));
  UsersAPI.followUser(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollow(id));
      dispatch(toggleFollowingProgress(false, id));
    }
  });
};

export const unfollowUser = (id) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, id));
  UsersAPI.unfollowUser(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollow(id));
      dispatch(toggleFollowingProgress(false, id));
    }
  });
};

let initialState = {
  users: [],
  pageSize: 4,
  currentPage: 1,
  totalUsersCount: 0,
  inProgress: true,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "TOGGLE-FOLLOW":
      stateCopy.users = [...state.users];
      let index = stateCopy.users.findIndex((u) => u.id === action.userId);
      if (index !== -1) {
        stateCopy.users[index].followed = !stateCopy.users[index].followed;
      }
      return stateCopy;
    case "SET-USERS":
      return { ...state, users: [...action.users] };
    case "GET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.count };
    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.page };

    case "TOGGLE-PROGRESS":
      return { ...state, inProgress: action.value };
    case "TOGGLE-FOLLOWING-PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : [...state.followingInProgress.filter((id) => id !== action.id)],
      };
    default:
      return stateCopy;
  }
};
