import React from 'react';
import styles from './Header.module.css';
import icon from './../../assets/img/header-icon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={icon} alt='' />
    </header>
  );
};

export default Header;
