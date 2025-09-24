import styles from "@/styles/dashboard.module.css";
import { getTime } from "@/utils";

import cakeLogo from "@/assets/birthday-cake.png";
import partyPopper from "@/assets/party-popper.png";
import team from "@/assets/team.png";
import Birthdays from "@/modules/Dashboard/Birthdays";
import Posts from "@/modules/Dashboard/Posts";
import QuickAccess from "@/modules/Dashboard/QuickAccess";
function Dashboard() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.TopStrip}>
        <div className={styles.wallpaperContainer}>
          <span className={styles.wallpaperText}>Welcome Varun Joshi!</span>
        </div>
      </div>

      <main className={styles.centerContainer}>

        <QuickAccess />



        <div className={styles.eachContainer}>
          <div
            style={{ gap: "10px", fontSize: "12px" }}
            className={styles.centerContainerLayout}
          >
            <span>ORGANIZATION : </span>
            <span>Ariel Software Solutions Pvt Ltd</span>
          </div>
          <div
            className={`${styles.GivePraiseContainer} ${styles.centerContainerLayout}`}
          >
            <span style={{ fontWeight: "bolder" }}>Praise</span>
            <input type="text" placeholder="Give praise from here.." />
          </div>
          <div className={styles.centerContainerLayout}>
            <span style={{ fontSize: "12px" }}>No announcements</span>
          </div>

          <div className={styles.centerContainerLayout}>
            <div className={styles.teamInfoContainer}>
              <span>
                <img src={cakeLogo} alt="" />
                <p>37 birthdays</p>
              </span>

              <span>
                <img src={partyPopper} alt="" />
                <p>3 Work aniversary</p>
              </span>

              <span>
                <img src={team} alt="" />
                <p>4 New Joines</p>
              </span>
            </div>
          </div>

          <div className={styles.centerContainerLayout}>
            <Birthdays />
          </div>

          <div className={styles.feedContainer}>
            <div
              className={`${styles.centerContainerLayout} ${styles.surveyCard}`}
            >
              <h4>This week's Pulse Survey is ready!</h4>
              <p>
                Share your valuable feedback to make your workplace even better.
              </p>
              <button className={styles.startPulse}>🚀 Start Pulse</button>
            </div>

            <div
              className={`${styles.centerContainerLayout} ${styles.surveyCard}`}
            >
              <h4>Ritababaygfjug</h4>
              <p>
                Share your valuable feedback to make your workplace even better.
              </p>
              <small>DEADLINE: 31 Aug 2025</small>
              <button className={`${styles.takeSurvey}`}>Take Survey</button>
            </div>
          </div>

          <Posts />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
