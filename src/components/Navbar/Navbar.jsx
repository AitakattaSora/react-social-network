import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const state = props.store.getState().sidebar;

  const friends = state.friends.map((friend) => {
    return <li key={friend.id}> {friend.name} </li>;
  });

  const links = state.links.map((link) => {
    return (
      <div key={link.id} className={s.item}>
        <NavLink to={link.to} activeClassName={s.activeClassName}>
          {link.title}
        </NavLink>
      </div>
    );
  });

  return (
    <nav className={s.nav}>
      {links}
      <div className='friendsList'>
        <h4>My friends:</h4>
        {friends}
      </div>
    </nav>
  );
};

export default Navbar;
