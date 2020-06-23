import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar store={props.store} />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
