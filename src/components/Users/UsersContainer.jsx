import { connect } from 'react-redux';
import {
  followUserAC,
  unfollowUserAC,
  setUsersDataAC,
  setTotalPagesCountAC,
  setCurrentPageAC,
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
      dispatch(followUserAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowUserAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersDataAC(users));
    },
    setTotal: (count) => {
      dispatch(setTotalPagesCountAC(count));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
