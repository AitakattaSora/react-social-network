import React from 'react';
import styles from './Profile.module.css';
import background from './../../assets/img/profile-background.png';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <div>
      <div>
        <img src={background} alt='' />
      </div>

      <div className={styles.profileWrapper}>
        <div>ava+desc</div>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
