import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "What's up?", likesCount: 5 },
        { id: 2, post: 'This is my first react app', likesCount: 7 },
        { id: 3, post: 'No one loves me', likesCount: 19 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Ann' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'John' },
        { id: 4, name: 'Helen' },
        { id: 5, name: 'Samantha' },
      ],
      messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'What is up?' },
        { id: 3, message: 'How are you doing?' },
      ],
      newMessageText: '',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Zhenya' },
        { id: 3, name: 'Anvar' },
      ],
    },
  },
  _callSubscriber() {
    console.log('State has changed');
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer
  },
  dispatch(action) {
    // Когда вызывается функция dispatch, она проходит по всем редюсерам и возравращает state в зависимости от типа экшена
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
