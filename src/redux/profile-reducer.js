const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT_FIELD = 'UPDATE_POST_INPUT_FIELD';
const SET_POSTS_DATA = 'SET_POSTS_DATA';

const initialState = {
  posts: [],
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

    case SET_POSTS_DATA: {
      return {
        ...state,
        posts: [...state.posts, ...action.postsData],
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
export const setPostsDataAC = (postsData) => ({
  type: SET_POSTS_DATA,
  postsData,
});

export default profileReducer;
