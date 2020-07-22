import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  const WrapperComponent = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />;
    return <Component {...props} />;
  };

  return connect(mapStateToProps, null)(WrapperComponent);
};
