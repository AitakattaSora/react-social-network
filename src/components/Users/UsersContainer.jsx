import { connect } from 'react-redux';
import {
  followUser,
  unfollowUser,
  setUsers,
  setTotalPagesCount,
  setCurrentPage,
} from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalPages: state.usersPage.totalPages,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followUser(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowUser(userId));
    },
    getUsers: (users) => {
      dispatch(setUsers(users));
    },
    getTotal: (count) => {
      dispatch(setTotalPagesCount(count));
    },
    setCurrentPageNumber: (page) => {
      dispatch(setCurrentPage(page));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
