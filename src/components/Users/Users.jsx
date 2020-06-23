import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';

export default class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          this.props.getUsers(response.data.items);
        });
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
  }

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

    return (
      <div>
        {this.props.users.map((user) => {
          return (
            <div key={user.id} className={styles.userInfoContainer}>
              <div className={styles.userInfoLeftBar}>
                <p>{user.name}</p>
                <img
                  className={styles.userPhoto}
                  src={
                    user.photos.small !== null
                      ? user.photos.small
                      : 'https://c-sf.smule.com/rs-s80/arr/5f/b9/b50b3845-3172-42bb-814d-ec0a2b27ad86.jpg'
                  }
                  alt=''
                />
                <div className={styles.actionButton}>
                  {user.followed ? (
                    <button
                      className={styles.unfollowButton}
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
