import React from 'react';

import styles from '../styles/ProfilePage.module.css';
import profilePageImg from '../../src/assets/images/profile-page-img.svg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ErrorPage = () => {
  return (
    <main className={styles.container}>
      <NavBar />
      <div className={styles.text}>Welcome to your profile page!</div>
      <img className={styles.imgDisplay} src={profilePageImg}></img>

      <Footer />
    </main>
  );
};

export default ErrorPage;
