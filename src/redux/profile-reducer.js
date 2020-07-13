import { usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT_FIELD = 'UPDATE_POST_INPUT_FIELD';
const SET_POSTS_DATA = 'SET_POSTS_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [],
  newPostText: '',
  profile: null,
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

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    default:
      return state;
  }
};

// Action creators
export const addPost = () => ({ type: ADD_POST });
export const updatePostInputField = (text) => ({
  type: UPDATE_POST_INPUT_FIELD,
  body: text,
});
export const setPostsData = (postsData) => ({
  type: SET_POSTS_DATA,
  postsData,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

// Thunks
export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((profile) => {
      dispatch(setUserProfile(profile));
    });
  };
};

export const getPosts = () => (dispatch) => {
  usersAPI.getPosts().then((posts) => {
    dispatch(setPostsData(posts));
  });
};

export default profileReducer;
