import React from 'react';
import styles from './Post.module.css';
import userIcon from './../../../../assets/img/user-icon.svg';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src={userIcon} alt='' />
      {props.message}
      <div>
        <span>Like ({props.likes} Likes)</span>
      </div>
    </div>
  );
};

export default Post;
