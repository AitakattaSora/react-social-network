const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const GET_TOTAL_PAGES_COUNT = 'GET_TOTAL_PAGES_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  users: [],
  totalUsersCount: 0,
  totalPages: 0,
  pageSize: 4,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
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
      console.log(state);
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
        users: [...action.users],
      };
    }

    case GET_TOTAL_PAGES_COUNT: {
      return {
        ...state,
        totalPages: action.count,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      };
    }

    default:
      return state;
  }
};

export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalPagesCount = (count) => ({
  type: GET_TOTAL_PAGES_COUNT,
  count,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});

export default usersReducer;
