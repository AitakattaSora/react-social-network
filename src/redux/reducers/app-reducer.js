import { getUserAuthData } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
  isInitializied: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        isInitializied: true,
      };
    }
    default:
      return state;
  }
};

// Action creators
const setInitialized = () => ({
  type: SET_INITIALIZED,
});

// Thunk
export const initialize = () => (dispatch) => {
  const auth = dispatch(getUserAuthData());
  auth.then(() => {
    dispatch(setInitialized());
  });
};
