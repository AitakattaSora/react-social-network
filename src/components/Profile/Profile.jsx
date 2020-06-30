import React from 'react';
import styles from './Profile.module.css';
import background from './../../assets/img/profile-background.png';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <div>
        <img src={background} alt='' />
      </div>

      <div className={styles.userProfile}>
        <img src={props.profile.photos.small} alt='' />
        <div className={styles.userProfileData}>
          <p>Name: {props.profile.name}</p>
          <p>Status: {props.profile.status}</p>
        </div>
      </div>

      <div className={styles.profileWrapper}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
