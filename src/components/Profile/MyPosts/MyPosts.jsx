import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { updateInputField, addPost } from '../../../redux/profile-reducer';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return <Post message={post.post} likes={post.likesCount} />;
  });

  let onClickHandler = () => {
    if (props.newPostText === '') {
      return alert('Post cannot be empty');
    }
    props.dispatch(addPost());
  };

  let onChangeHandler = (event) => {
    let post = event.target.value;
    props.dispatch(updateInputField(post));
  };

  return (
    <div>
      <div>My posts</div>
      <div>
        <textarea
          onChange={onChangeHandler}
          value={props.newPostText}
          placeholder='Start writing post...'
          cols='70'
          rows='10'
        ></textarea>
      </div>
      <div>
        <button onClick={onClickHandler}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
