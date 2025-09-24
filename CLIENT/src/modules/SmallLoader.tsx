import React from "react";
import styles from "./smallLoader.module.css";

const SmallLoader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default SmallLoader;
