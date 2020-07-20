import React from 'react';
import styles from './Profile.module.css';
import background from './../../assets/img/profile-background.png';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Status from './Status';

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div>
      <div>
        <img className={styles.backgroundImage} src={background} alt='' />
      </div>

      <div className={styles.userProfile}>
        <img
          src={profile.id === 0 ? profile.photos.large : profile.photos.small}
          alt=''
        />
        <div className={styles.userProfileData}>
          <p>Name: {profile.name}</p>
          <p>County: {profile.location.country}</p>
          <p>City: {profile.location.city}</p>
          <Status
            profile={profile}
            status={status}
            updateStatus={updateStatus}
          />
        </div>
      </div>

      <div className={styles.profileWrapper}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
