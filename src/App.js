import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import DefaultLoader from './components/common/loaders/DefaultLoader';
import styles from './AppLoader.module.css';
import { initialize } from './redux/reducers/app-reducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.isInitialized) {
      return (
        <div className={styles.container}>
          <DefaultLoader />
        </div>
      );
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/login' render={() => <Login />} />
          <Route path='/profile/:id?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitializied,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);
