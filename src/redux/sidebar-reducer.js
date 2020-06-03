const initialState = {
  friends: [
    { id: 1, name: 'Ann' },
    { id: 2, name: 'Tom' },
    { id: 3, name: 'Bob' },
  ],
};

let sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
