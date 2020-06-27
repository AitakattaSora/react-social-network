const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT_FIELD = 'UPDATE_POST_INPUT_FIELD';

const initialState = {
  posts: [
    { id: 1, post: "What's up?", likesCount: 5 },
    { id: 2, post: 'This is my first react app', likesCount: 7 },
    { id: 3, post: 'No one loves me', likesCount: 19 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  // Function should be pure
  // We can't change existing object, so we make its copy
  switch (action.type) {
    case UPDATE_POST_INPUT_FIELD: {
      return {
        ...state,
        newPostText: action.body,
      };
    }

    case ADD_POST: {
      const post = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, post],
      };
    }

    default:
      return state;
  }
};

// Action creators
export const addPostAC = () => ({ type: ADD_POST });
export const updatePostInputFieldAC = (text) => ({
  type: UPDATE_POST_INPUT_FIELD,
  body: text,
});

export default profileReducer;
