import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// This is basically old-store, but using redux
const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
