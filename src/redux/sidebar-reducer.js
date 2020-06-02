const initialState = {
  friends: [
    { id: 1, name: 'Anton' },
    { id: 2, name: 'Zhenya' },
    { id: 3, name: 'Anvar' },
  ],
};

let sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
