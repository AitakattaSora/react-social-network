import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';

// По сути это и есть старый объект store
const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

// window.store = store.getState();

export default store;
