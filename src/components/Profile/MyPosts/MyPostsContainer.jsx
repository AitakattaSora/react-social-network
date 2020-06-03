import React from 'react';
import { updatePostInputField, addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const { dispatch } = store;
        const { posts, newPostText } = state.profilePage;

        const onClickHandler = () => {
          dispatch(addPost());
        };

        const onChangeHandler = (text) => {
          dispatch(updatePostInputField(text));
        };

        return (
          <MyPosts
            posts={posts}
            newPostText={newPostText}
            onInputChange={onChangeHandler}
            onButtonClick={onClickHandler}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
