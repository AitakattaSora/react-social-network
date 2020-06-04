import React from 'react';
import s from './Profile.module.css';
import bg from './../../image.png';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <div>
      <div>
        <img src={bg} alt='' />
      </div>

      <div className={s.profileWrapper}>
        <div>ava+desc</div>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
