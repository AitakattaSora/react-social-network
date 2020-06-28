import React from 'react';
import {
  updatePostInputFieldAC,
  addPostAC,
  setPostsDataAC,
} from '../../../redux/profile-reducer';
import axios from 'axios';
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
      axios.get('http://localhost:3004/posts').then((response) => {
        this.props.setPostsData(response.data);
      });
    }
  }

  render() {
    return (
      <MyPosts
        posts={this.props.posts}
        newPostText={this.props.newPostText}
        onClick={this.props.onClick}
        onChange={this.props.onChange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(updatePostInputFieldAC(text));
    },
    onClick: () => {
      dispatch(addPostAC());
    },
    setPostsData: (postsData) => {
      dispatch(setPostsDataAC(postsData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
