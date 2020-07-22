import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import ActionButton from '../../common/buttons/ActionButton';
import FormikTextarea from '../../common/inputs/FormikTextarea';
import { Formik, Form } from 'formik';

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => {
    return <Post key={post.id} message={post.post} likes={post.likesCount} />;
  });

  return (
    <div>
      <div>
        <Formik
          initialValues={{ post: '' }}
          onSubmit={(values, { resetForm }) => {
            props.addPost(values.post);
            resetForm();
          }}
        >
          {() => (
            <Form>
              <FormikTextarea
                name='post'
                placeholder='Start writing post...'
                width='450px'
                height='120px'
              />
              <div>
                <ActionButton name='Add post' />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.posts}>
        <div style={{ marginBottom: 20 }}>My posts</div>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
