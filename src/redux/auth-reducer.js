import { AuthAPI } from '../api/api';

const AUTH_ME = 'AUTH_ME';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ME: {
      return {
        ...state,
        id: action.id,
        login: action.login,
        email: action.email,
        isAuth: action.isAuth,
      };
    }
    default:
      return state;
  }
};

// Action creators
const setUserAuthData = ({ id, login, email }, isAuth) => ({
  type: AUTH_ME,
  id,
  login,
  email,
  isAuth,
});

// Thunks
export const getUserAuthData = () => (dispatch) => {
  // we return a promise here to be able to access the api call result in app-reducer
  return AuthAPI.me().then(({ data }) => {
    if (data.resultCode === 0) {
      dispatch(setUserAuthData(data.data, true));
    }
  });
};

export const login = (email, password, rememberMe = false) => (dispatch) => {
  AuthAPI.login(email, password, rememberMe).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(getUserAuthData());
    }
  });
};

export const logout = () => (dispatch) => {
  AuthAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      const obj = { id: null, login: null, email: null };
      dispatch(setUserAuthData(obj, false));
    }
  });
};
