import styles from "./loader.module.css";
function Loader() {
  return (
    <div className={styles.blurBackground}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
