const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_FIELD = 'UPDATE_INPUT_FIELD';

const initialState = {
  posts: [
    { id: 1, post: "What's up?", likesCount: 5 },
    { id: 2, post: 'This is my first react app', likesCount: 7 },
    { id: 3, post: 'No one loves me', likesCount: 19 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(post);
      state.newPostText = '';
      return state;

    case UPDATE_INPUT_FIELD:
      state.newPostText = action.body;
      return state;
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateInputField = (text) => ({
  type: UPDATE_INPUT_FIELD,
  body: text,
});

export default profileReducer;
