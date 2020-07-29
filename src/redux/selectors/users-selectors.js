import { createSelector } from 'reselect';

const getUsers = (state) => {
  return state.usersPage.users;
};

/* 
  Primitive selector - function that returns something from state without heavy calculations, loops, etc. getUsers is a primitive selector

  createSelector takes primitive state selectors as dependecies. After a first function call
  returned data is getting cached and on furthers calls it checks new data from dependecies with cached one.
  If they differ, it makes heave calculations, otherwise returns cached data  
*/

// This is selector has no meaning
// It's here only for reselect library learning purposes
export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter(() => true);
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalPages = (state) => {
  return state.usersPage.totalPages;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getIsFollowing = (state) => {
  return state.usersPage.isFollowing;
};
