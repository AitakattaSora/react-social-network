import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const state = props.sidebar;

  const friends = state.friends.map((friend) => {
    return <li key={friend.id}> {friend.name} </li>;
  });

  const links = state.links.map((link) => {
    return (
      <div key={link.id} className={styles.item}>
        <NavLink to={link.to} activeClassName={styles.activeLink}>
          {link.title}
        </NavLink>
      </div>
    );
  });

  return (
    <nav className={styles.nav}>
      {links}
      <div className='friendsList'>
        <h4>My friends:</h4>
        {friends}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

export default connect(mapStateToProps, {})(Navbar);
