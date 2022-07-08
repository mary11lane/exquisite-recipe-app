import React from 'react';
import styles from '../styles/Signup.module.css';
import Footer from '../components/Footer';

const SignupPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.text}>SIGNUP</div>
      <form className={styles.form}>
        <input type="text" placeholder="username"></input>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <button>SIGNUP</button>
      </form>
      <Footer />
    </main>
  );
};

export default SignupPage;
