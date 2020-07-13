import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import ActionButton from '../../common/buttons/ActionButton';
import MultilineField from '../../common/inputs/MultilineField';

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
        <MultilineField
          onChange={onChangeHandler}
          value={props.newPostText}
          placeholder='Start writing post...'
          width='450px'
          height='120px'
        />
      </div>
      <div>
        <ActionButton onClick={onClickHandler} name='Add post' />
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
