import React from 'react';
import styles from './Header.module.css';
import icon from './../../assets/img/header-icon.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ name, isAuth, logout }) => {
  return (
    <header className={styles.header}>
      <img src={icon} alt='' />
      {isAuth ? (
        <div>
          <span>Welcome, {name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <span>You are not logged in</span>
          <NavLink to={`/login`}>
            <button>Login</button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
