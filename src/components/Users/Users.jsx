import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  const users = props.users.map((user) => {
    return (
      <div key={user.id} className={styles.userInfoContainer}>
        <div className={styles.userInfoLeftBar}>
          <p>{user.name}</p>
          <img className={styles.userPhoto} src={user.photoUrl} alt='' />
          <div className={styles.actionButton}>
            {user.isFollowed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
        <div className={styles.userStatusBar}>{user.status}</div>
        <div className={styles.userLocationBar}>
          <p>{user.location.city},</p>
          <p>{user.location.country}</p>
        </div>
      </div>
    );
  });

  return <div>{users}</div>;
};

export default Users;
