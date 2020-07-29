import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './reducers/dialogs-reducer';
import sidebarReducer from './reducers/sidebar-reducer';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth-reducer';
import { appReducer } from './reducers/app-reducer';
// import logger from 'redux-logger';

// This is basically old-store, but using redux
const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
