import React from 'react';
import styles from '../styles/Login.module.css';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.text}>LOGIN</div>
      <form className={styles.form}>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <button>LOGIN</button>
      </form>
      <Footer />
    </main>
  );
};

export default LoginPage;
