import React from "react";
import styles from "./QuickAccess.module.css";

const QuickAccess: React.FC = () => {
  return (
    <div className={styles.quickAccess}>
      <div className={styles.card} >
        <h4>Inbox</h4>
        <p>
          <strong>1</strong> Tasks waiting for your approval. Please click on take
          action for more details.
        </p>
        <button className={styles.actionBtn}>Take Action</button>
      </div>

      <div className={styles.card}>
        <h4>Holidays</h4>
        <div className={styles.holidayContent}>
          <div>
            <h3 className={styles.holidayName}>Gandhi Jayanti</h3>
            <p>Thu, 02 October, 2025</p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Mahatma-Gandhi_portrait.jpg"
            alt="Gandhi"
            className={styles.holidayImage}
          />
        </div>
      </div>

      <div style={{ background: "#47ccde" }} className={styles.card} >
        <h4>On Leave Today</h4>
        <p>Everyone is working today!</p>
        <small>No one is on leave today.</small>
      </div>

      <div className={`${styles.card} ${styles.timeCard}`}>
        <h4>Time Today - Wed, 24 Sept 2025</h4>
        <p className={styles.timeLabel}>Current Time</p>
        <h2 className={styles.time}>08:01:12 PM</h2>
      </div>

      <div className={styles.card}>
        <h4>Leave Balances</h4>
        <div className={styles.leaveBalance}>
          <div className={styles.leaveCircle}>10<br />Days</div>
          <div>
            <p>Marriage Leave</p>
            <div className={styles.links}>
              <a href="#">Request Leave</a> | <a href="#">View All Balances</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card} style={{ background: "#fd6ab9" }}>
        <h4>Working Remotely</h4>
        <p>Everyone is at office!</p>
        <small>No one is working remotely today.</small>
      </div>

      <div className={`${styles.card} ${styles.quickLinks}`}>
        <h4>Quick Links</h4>
        <p>No Quick Links are added</p>
      </div>

      <div className={styles.card}>
        <h4>Feedbacks Received</h4>
        <p>No Feedbacks received.</p>
        <button className={styles.actionBtn}>Request Feedback</button>
      </div>
    </div>
  );
};

export default QuickAccess;
