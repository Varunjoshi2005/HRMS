import styles from "@/styles/MainProfile.module.css";

function AboutTab() {
  return (
    <div className={styles.aboutSection}>
      <h3>About</h3>
      <div className={styles.aboutField}>
        <label>What I love about my job?</label>
        <input type="text" placeholder="Add your response" />
      </div>
      <div className={styles.aboutField}>
        <label>My interests and hobbies</label>
        <input type="text" placeholder="Add your response" />
      </div>
    </div>
  );
}

export default AboutTab;
