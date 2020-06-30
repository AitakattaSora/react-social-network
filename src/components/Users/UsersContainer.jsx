import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setUsers,
  setTotal,
  setCurrentPage,
  toggleFetching,
} from '../../redux/users-reducer';
import Users from './Users.jsx';
import DefaultLoader from '../common/loaders/DefaultLoader';

/**
 * Now there are 2 container components and 1 functional
 * First container component's purpose is to connect React with Redux Store
 * Second container component's purpose is to make API requests and give props to Users functional component

 * Before there were 3 files: UsersContainer -> UsersContainer2 (Class component) -> Users (Functional component)

 * mapDispatchToProps trick:
 * instead of making a wrapper function that dispatches action,
 * we can just create an object with action creators and pass it as second parameter
 * to connect function. It will do the logic itself.
 * 
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

// First container component
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotal,
  setCurrentPage,
  toggleFetching,
})(UsersContainer);
