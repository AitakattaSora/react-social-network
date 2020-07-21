const initialState = {
  friends: [
    { id: 1, name: 'Ann' },
    { id: 2, name: 'Tom' },
    { id: 3, name: 'Bob' },
  ],
  links: [
    { id: 0, title: 'Login', to: '/login' },
    { id: 1, title: 'Profile', to: '/profile' },
    { id: 2, title: 'Messages', to: '/dialogs' },
    { id: 3, title: 'News', to: '/news' },
    { id: 4, title: 'Users', to: '/users' },
  ],
};

let sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
