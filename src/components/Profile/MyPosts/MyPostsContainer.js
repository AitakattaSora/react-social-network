import React from 'react';
import {
  addPost,
  setPostsData,
  getPosts,
} from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

class MyPostsContainer extends React.Component {
  componentDidMount() {
    if (this.props.posts.length === 0) {
      this.props.getPosts();
    }
  }

  render() {
    return <MyPosts posts={this.props.posts} addPost={this.props.addPost} />;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

export default connect(mapStateToProps, {
  addPost,
  setPostsData,
  getPosts,
})(MyPostsContainer);
