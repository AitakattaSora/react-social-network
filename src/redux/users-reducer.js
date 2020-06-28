const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const GET_TOTAL_PAGES_COUNT = 'GET_TOTAL_PAGES_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
  users: [],
  totalUsersCount: 0,
  totalPages: 0,
  pageSize: 4,
  currentPage: 1,
  isFetching: false,
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

    case TOGGLE_FETCHING: {
      return {
        ...state,
        isFetching: action.value,
      };
    }

    default:
      return state;
  }
};

// Action creators
export const followUserAC = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUserAC = (userId) => ({ type: UNFOLLOW_USER, userId });
export const setUsersDataAC = (users) => ({ type: SET_USERS, users });
export const setTotalPagesCountAC = (count) => ({
  type: GET_TOTAL_PAGES_COUNT,
  count,
});
export const setCurrentPageAC = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
export const toggleFetchingAC = (value) => ({
  type: TOGGLE_FETCHING,
  value,
});

export default usersReducer;
