import { AuthAPI } from "../API/api";
const setUserData = (data, resultCode) => {
  return {
    type: "SET_USER_DATA",
    data: data,
    resultCode: resultCode,
  };
};
const changeAuth = (value) => {
  return {
    type: "CHANGE_AUTH",
    value: value,
  };
};

const showCaptcha = (url) => {
  return {
    type: "SHOW_CAPTCHA",
    url: url,
  };
};
const setError = (err) => {
  return {
    type: "SET_ERROR",
    error: err,
  };
};

export const authUser = () => (dispatch) => {
  return AuthAPI.AuthUser().then((data) => {
    dispatch(setUserData(data.data, data.resultCode));

  });
};

export const loginUser = (values) => (dispatch) => {
  AuthAPI.LoginUser(
    values.email,
    values.password,
    values.rememberMe,
    values.captcha
  ).then((data) => {
    let error;
    dispatch(changeAuth(data.resultCode === 0));
    switch (data.resultCode) {
      case 0:
        AuthAPI.AuthUser().then((user) => dispatch(setUserData(user.data, 0)));
        dispatch(showCaptcha(null));
        break;
      case 1:
        dispatch(showCaptcha(null));
        break;
      case 10:
        AuthAPI.GetCaptcha().then((data) => dispatch(showCaptcha(data.url)));
        break;
      default:
        error = null;
        break;
    }
    if (data.messages.length > 0) {
      switch (data.messages[0].toLowerCase()) {
        case "incorrect email or password":
          error = "Неверный пароль или логин";
          break;
        case "incorrect anti-bot symbols":
          error = "Капча введена неверно";
          break;
        default:
          error = null;
          break;
      }
    }

    dispatch(setError(error));
  });
};

export const logoutUser = (values) => (dispatch) => {
  AuthAPI.LogoutUser().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserData({ id: null, email: null, login: null }, 0));
      dispatch(changeAuth(false));
    }
  });
};

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
  error: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        id: action.data.id,
        email: action.data.email,
        login: action.data.login,
        isAuth: action.resultCode === 0,
      };
    case "CHANGE_AUTH":
      return {
        ...state,
        isAuth: action.value,
      };

    case "SHOW_CAPTCHA":
      return {
        ...state,
        captchaUrl: action.url,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
