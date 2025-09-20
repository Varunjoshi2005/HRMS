import React from "react";
import styles from "@/styles/login.module.css";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.leftPanel}>
        <div className={styles.logo}>Hire Link</div>
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>Sign in to continue to your account</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className={styles.button}>Login</button>
        </form>

        <div className={styles.footer}>
          <a href="">Forgot Password?</a>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.overlay}>
          <h1>HIRE LINK</h1>
          <p>Manage leaves, attendance, and employee details in one place</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
