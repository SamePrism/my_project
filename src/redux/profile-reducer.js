import { ProfileAPI } from "../API/api";
export const addPosts = (newPostText) => {
  return {
    type: "ADD-POST",
    text: newPostText,
  };
};

export const toggleLikes = (id) => {
  return {
    type: "TOGGLE-LIKES",
    id: id,
  };
};
const setUserProfile = (profile) => {
  return {
    type: "SET-USER-PROFILE",
    profile: profile,
  };
};
const setStatus = (status) => {
  return {
    type: "SET-STATUS",
    status: status,
  };
};

export const setProfile = (profileID) => (dispatch) => {
  ProfileAPI.setUserProfile(profileID).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getStatus = (profileID) => (dispatch) => {
  ProfileAPI.getStatus(profileID).then((data) => dispatch(setStatus(data)));
};

export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

let initialState = {
  posts: [
    {
      id: 1,
      message: "Всем привте",
      likesCount: 12,
      commentsCount: 12,
      like: false,
    },
    {
      id: 2,
      message: "Мой второй пост",
      likesCount: 7,
      commentsCount: 3,
      like: false,
    },
    {
      id: 3,
      message: "Какой-то текст",
      likesCount: 4,
      commentsCount: 1,
      like: false,
    },
    { id: 4, message: "Вау", likesCount: 9, commentsCount: 5, like: false },
  ],
  profile: null,
  status: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.text,
            likesCount: 0,
            commentsCount: 0,
            like: false,
          },
        ],
      };

    case "TOGGLE-LIKES":
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.id
            ? {
                ...post,
                likesCount: post.like ? post.likesCount - 1 : post.likesCount + 1,
                like: !post.like,
              }
            : post
        ),
      };

    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };

    case "SET-STATUS":
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};
