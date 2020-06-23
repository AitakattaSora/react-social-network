const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
      console.log(state);
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    default:
      return state;
  }
};

export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;
