import { updatePostInputField, addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState();
//         const { dispatch } = store;
//         const { posts, newPostText } = state.profilePage;

//         const onClickHandler = () => {
//           dispatch(addPost());
//         };

//         const onChangeHandler = (text) => {
//           dispatch(updatePostInputField(text));
//         };

//         return (
//           <MyPosts
//             posts={posts}
//             newPostText={newPostText}
//             onInputChange={onChangeHandler}
//             onButtonClick={onClickHandler}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (text) => {
      dispatch(updatePostInputField(text));
    },
    onButtonClick: () => {
      dispatch(addPost());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
