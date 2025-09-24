import React from "react";
import { Link } from "react-router-dom";
import styles from "./notfound.module.css";

const NotFound404: React.FC = () => {
  return (
    <main className={styles.wrapper} role="main">
      <div className={styles.card}>
        <div className={styles.art} aria-hidden>
          <div className={styles.oops}>404</div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.description}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className={styles.actions}>
            <Link to="/" className={styles.btn}>
              Go home
            </Link>
            <button
              className={styles.btnOutline}
              onClick={() => window.history.back()}
            >
              Go back
            </button>
          </div>

          <p className={styles.small}>
            If you typed the URL manually, double-check it.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound404;
