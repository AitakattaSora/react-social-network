import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={ s.item }>
      <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="" />
      { props.message }
      <div>
        <span>Like ({ props.likes } Likes)</span>
      </div>
    </div>
  )
}

export default Post;