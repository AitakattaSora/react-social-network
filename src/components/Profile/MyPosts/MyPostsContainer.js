import React from 'react';
import {
  updatePostInputField,
  addPost,
  setPostsData,
  getPosts,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

class MyPostsContainer extends React.Component {
  componentDidMount() {
    if (this.props.posts.length === 0) {
      this.props.getPosts();
    }
  }

  render() {
    return (
      <MyPosts
        posts={this.props.posts}
        newPostText={this.props.newPostText}
        onClick={this.props.addPost}
        onChange={this.props.updatePostInputField}
      />
    );
  }
}

export default connect(mapStateToProps, {
  updatePostInputField,
  addPost,
  setPostsData,
  getPosts,
})(MyPostsContainer);
