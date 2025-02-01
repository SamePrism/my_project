import { authUser } from "./auth-reducer";

const initSuccess = () => {
  return {
    type: "SET-INITIALIZED",
  };
};
export const initializeApp = () => (dispatch) => {

  let promise = dispatch(authUser());

  Promise.all([promise]).then(() => {
    dispatch(initSuccess());

  });
};

let initialState = {
  initialized: true,
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-INITIALIZED":
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};
