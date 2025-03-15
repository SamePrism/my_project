import axios from "axios"; 

import api_params from "./keys.js"

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": api_params.key,
    "Authorization": "Bearer " + api_params.token
  },
});

export const UsersAPI = {
  getUsers: (currentPage = 1, pageSize = 4) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUser: (userId) => {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },

  unfollowUser: (userId) => {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const ProfileAPI = {
  

  setUserProfile: (profileID) =>{
    return instance
      .get(
        `profile/${profileID}`
      ).then((response) => response.data)
  },
  getStatus: (profileID) => {
    return instance.get(`profile/status/${profileID}`).then((response) => response.data);
  },
  updateStatus: (status) => {
    return instance.put(`profile/status`, { status }).then((response) => response.data);
  },
};

export const AuthAPI = {
  AuthUser: () => {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  LoginUser: (email, password, rememberMe, captcha) => {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then((response) => response.data);
  },
  LogoutUser: () => {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
  GetCaptcha: () => {
    return instance.get(`security/get-captcha-url`).then((response) => response.data);
  }
}
