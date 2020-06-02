import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  let friends = props.state.friends.map((friend) => {
    return <li> {friend.name} </li>;
  });

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className='friendsList'>
        <h4>My friends:</h4>
        {friends}
      </div>
    </nav>
  );
};

export default Navbar;
