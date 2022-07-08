import React from 'react';
import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <main className={styles.containerNav}>
      <Link to="/">
        <section className={styles.logo}>Exquisite</section>
      </Link>
      <section className={styles.nav}>
        <Link to="/profile">
          <div>Profile</div>
        </Link>

        <div>Logout</div>
      </section>
    </main>
  );
};

export default NavBar;
