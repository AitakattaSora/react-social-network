import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  followUserAC,
  unfollowUserAC,
  setUsersDataAC,
  setTotalPagesCountAC,
  setCurrentPageAC,
  toggleFetchingAC,
} from '../../redux/users-reducer';
import Users from './Users.jsx';
import DefaultLoader from '../common/loaders/DefaultLoader';

/**
 * Now there are 2 container components and 1 functional
 * First container component's purpose is to connect React with Redux Store
 * Second container component's purpose is to make API requests and give props to Users functional component

 * Before there were 3 files: UsersContainer -> UsersContainer2 (Class component) -> Users (Functional component)
 */

// Second container component
class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleFetching(true);
      // `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      axios
        .get(`http://localhost:3004/users`, {
          params: {
            _page: this.props.currentPage,
            _limit: this.props.pageSize,
          },
        })
        .then((response) => {
          this.props.toggleFetching(false);
          this.props.setTotal(response.headers['x-total-count']);
          this.props.setUsers(response.data);
        });
    }
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleFetching(true);
    axios
      .get(`http://localhost:3004/users`, {
        params: {
          _page: page,
          _limit: this.props.pageSize,
        },
      })
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setTotal(response.headers['x-total-count']);
        this.props.setUsers(response.data);
      });
  };

  render() {
    if (this.props.isFetching) {
      return <DefaultLoader />;
    }

    return (
      <Users
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalPages={this.props.totalPages}
        users={this.props.users}
        onPageChange={this.onPageChange}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalPages: state.usersPage.totalPages,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    toggleFetching: (value) => {
      dispatch(toggleFetchingAC(value));
    },
  };
};

// First container component
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
