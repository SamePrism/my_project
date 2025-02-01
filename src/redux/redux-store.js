import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { newsReducer } from "./news-reducer";
import { authReducer } from "./auth-reducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import { appReducer } from "./app-reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  newsPage: newsReducer,
  auth: authReducer,
  app: appReducer,
 
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
