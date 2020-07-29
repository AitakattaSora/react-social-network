import { profileAPI } from '../../api/api';

const ADD_POST = 'ADD_POST';
const SET_POSTS_DATA = 'SET_POSTS_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_STATUS = 'UPDATE_STATUS';

const initialState = {
  posts: [],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  // Function should be pure
  // We can't change existing object, so we make its copy
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            post: action.post,
            likesCount: 0,
          },
        ],
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

    case UPDATE_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

// Action creators
export const addPost = (post) => ({ type: ADD_POST, post });
export const setPostsData = (postsData) => ({
  type: SET_POSTS_DATA,
  postsData,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
const setStatus = (status) => ({
  type: UPDATE_STATUS,
  status,
});

// Thunks
export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((profile) => {
      dispatch(setUserProfile(profile));
    });
  };
};

export const getPosts = () => (dispatch) => {
  profileAPI.getPosts().then((posts) => {
    dispatch(setPostsData(posts));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((res) => {
    dispatch(setStatus(res.data.status));
  });
};

export const updateStatus = (userId, status) => (dispatch) => {
  profileAPI.updateStatus(userId, status).then((res) => {
    if (res.status === 200) {
      dispatch(setStatus(res.data.status));
    }
  });
};

export default profileReducer;
