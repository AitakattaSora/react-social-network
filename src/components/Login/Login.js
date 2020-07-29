import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginSchema = yup.object().shape({
  login: yup
    .string()
    .min(3, 'Too short')
    .max(30, 'Too long')
    .required('This field is required'),
  password: yup
    .string()
    .min(3, 'Too short')
    .max(30, 'Too long')
    .required('This field is required'),
});

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to='/profile' />;
  }

  return (
    <div className={styles.loginFormContainer}>
      <Formik
        initialValues={{
          login: '',
          password: '',
          remember: false,
        }}
        validationSchema={LoginSchema}
        onSubmit={(data, { resetForm }) => {
          const { login, password, remember } = data;
          props.login(login, password, remember);
          // resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name='login' placeholder='email' />
            {errors.login && touched.login ? (
              <div className={styles.error}>{errors.login}</div>
            ) : null}
            <div>
              <Field type='password' name='password' placeholder='password' />
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
            </div>
            <div>
              <label>
                <Field type='checkbox' name='remember' />
                <span>Remeber me</span>
              </label>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
export default connect(mapStateToProps, { login })(Login);
