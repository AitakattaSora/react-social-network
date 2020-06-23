import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

// По сути это и есть старый объект store
const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

// window.store = store.getState();

export default store;
