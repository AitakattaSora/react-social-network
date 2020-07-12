import React from 'react';
import styles from './Users.module.css';
import userIcon from '../../assets/img/user-icon.svg';
import ActionButton from '../common/buttons/ActionButton';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

// Pure functional components that only takes props and returns JSX
const Users = (props) => {
  const pagesCount = Math.ceil(props.totalPages / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.usersContainer}>
      <p>Pages:</p>
      <div className={styles.pagesContainer}>
        {pages.map((page) => {
          return (
            <span
              key={page}
              className={
                props.currentPage === page ? styles.selectedPage : 'false'
              }
              // We pass an anonymous function there because we need a pageNumber parameter, but default onClick function takes and event parameter, which we don't need
              onClick={() => {
                props.onPageChange(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={styles.userInfoContainer}>
            <div className={styles.userInfoLeftBar}>
              <p>{user.name}</p>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  className={styles.userPhoto}
                  src={
                    user.photos.small !== null ? user.photos.small : userIcon
                  }
                  alt=''
                />
              </NavLink>
              <div className={styles.actionButton}>
                {user.id === 0 ? null : user.followed ? (
                  <ActionButton
                    className={styles.unfollowButton}
                    name='Unfollow'
                    isFetching={props.isFollowing.includes(user.id)}
                    onClick={() => {
                      props.setIsFollowing(user.id, true);
                      usersAPI
                        .unfollowUser(user.id, {
                          ...user,
                          followed: false,
                        })
                        .then((response) => {
                          if (response.status === 200) {
                            props.unfollow(user.id);
                          }
                          props.setIsFollowing(user.id, false);
                        });
                    }}
                  />
                ) : (
                  <ActionButton
                    className={styles.followButton}
                    name='Follow'
                    isFetching={props.isFollowing.includes(user.id)}
                    onClick={() => {
                      props.setIsFollowing(user.id, true);
                      usersAPI
                        .followUser(user.id, {
                          ...user,
                          followed: true,
                        })
                        .then((response) => {
                          if (response.status === 200) {
                            props.follow(user.id);
                          }
                          props.setIsFollowing(user.id, false);
                        });
                    }}
                  />
                )}
              </div>
            </div>
            <div className={styles.userStatusBar}>{user.status}</div>
            <div className={styles.userLocationBar}>
              <p>{user.location.city}</p>
              <p>{user.location.country}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
