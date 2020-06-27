import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import ActionButton from '../../Elements/Button';

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => {
    return <Post key={post.id} message={post.post} likes={post.likesCount} />;
  });

  const onClickHandler = () => {
    if (props.newPostText === '') {
      return alert('Post cannot be empty');
    }
    props.onClick();
  };

  const onChangeHandler = (event) => {
    const text = event.target.value;
    props.onChange(text);
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
        <ActionButton onClick={onClickHandler} name='Add post' />
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
