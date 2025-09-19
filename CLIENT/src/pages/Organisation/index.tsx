import styles from "./organisation.module.css";
function Organization() {
  return (
    <div>
      <div className={styles.topItems}>
        {["EMPLOYEES", "DOCUMENTS", "ENGAGE"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div
        style={{
          fontWeight: "lighter",
          display: "flex",
          gap: "20px",
          padding: "10px",
        }}
      >
        <span>Employee Directory</span>
        <span>Organisation Tree</span>
      </div>

      <div className={styles.SelectedItem}>
        <span>Employee Directory</span>
      </div>

      <div className={styles.filterationSection}>
        <div className={styles.topSectionItems}>
          <div
            className={styles.eachSection}
            style={{ borderLeft: "1px solid rgb(134, 134, 134)" }}
          ></div>
          <div className={styles.eachSection}></div>
          <div className={styles.eachSection}></div>
          <div className={styles.eachSection}></div>
          <div className={styles.eachSection}></div>
          <div className={styles.eachSection}></div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <span>Showing 30 of 38</span>
        </div>
      </div>
    </div>
  );
}

export default Organization;
