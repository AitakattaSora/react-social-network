import { connect } from 'react-redux';
import { followUser, unfollowUser, setUsers } from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
