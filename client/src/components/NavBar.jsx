import React from 'react';
import styles from '../styles/NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/login');
  };

  return (
    <main className={styles.containerNav}>
      <Link to="/">
        <section className={styles.logo}>Exquisite</section>
      </Link>
      <section className={styles.nav}>
        <Link to="/profile">
          <div>Profile</div>
        </Link>

        <div onClick={logout}>Logout</div>
      </section>
    </main>
  );
};

export default NavBar;
