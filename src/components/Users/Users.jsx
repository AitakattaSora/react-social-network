import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userIcon from '../../assets/img/user-icon.png';

export default class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      // `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      axios
        .get(`http://localhost:3004/users`, {
          params: {
            _page: this.props.currentPage,
            _limit: this.props.pageSize,
          },
        })
        .then((response) => {
          this.props.setTotal(response.headers['x-total-count']);
          this.props.setUsers(response.data);
        });
    }
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(`http://localhost:3004/users`, {
        params: {
          _page: page,
          _limit: this.props.pageSize,
        },
      })
      .then((response) => {
        this.props.setTotal(response.headers['x-total-count']);
        this.props.setUsers(response.data);
      });
  };

  render() {
    if (this.props.users.length === 0) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '60px',
            fontSize: '20px',
          }}
        >
          Loading...
        </div>
      );
    }

    const pagesCount = Math.ceil(this.props.totalPages / this.props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={styles.usersContainer}>
        <div className={styles.pagesContainer}>
          <strong>total: {pagesCount}</strong> <br />
          {pages.map((page) => {
            return (
              <span
                key={page}
                className={
                  this.props.currentPage === page
                    ? styles.selectedPage
                    : 'false'
                }
                onClick={() => {
                  this.onPageChange(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => {
          return (
            <div key={user.id} className={styles.userInfoContainer}>
              <div className={styles.userInfoLeftBar}>
                <p>{user.name}</p>
                <img
                  className={styles.userPhoto}
                  src={
                    user.photos.small !== null ? user.photos.small : userIcon
                  }
                  alt=''
                />
                <div className={styles.actionButton}>
                  {user.followed ? (
                    <button
                      className={styles.unfollowButton}
                      // We pass an anonymous function there because we need a pageNumber parameter, but default onClick function takes and event parameter, which we don't need
                      onClick={() => {
                        this.props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className={styles.followButton}
                      onClick={() => {
                        this.props.follow(user.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div className={styles.userStatusBar}>{user.status}</div>
              <div className={styles.userLocationBar}>
                <p>{'user.location.city'}</p>
                <p>{'user.location.country'}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
