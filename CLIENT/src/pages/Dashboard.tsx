import styles from "@/styles/dashboard.module.css";
import { getTime } from "@/utils";
import cakeLogo from "@/assets/birthday-cake.png";
import partyPopper from "@/assets/party-popper.png";
import team from "@/assets/team.png";
import Birthdays from "@/modules/Dashboard/birthdays";
function Dashboard() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.TopStrip}>
        <div className={styles.wallpaperContainer}>
          <span className={styles.wallpaperText}>Welcome Varun Joshi!</span>
        </div>
      </div>

      <main className={styles.centerContainer}>
        <div className={styles.eachContainer}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <span>Quick Access</span>
            <div
              style={{ background: "#9C84B8" }}
              className={styles.smallInfoContainer}
            >
              <span>Quick Link</span>
              <div style={{ display: "flex", gap: "2.3rem" }}>
                <span>Google</span>
                <span>XYZ</span>
              </div>
            </div>
            <div
              style={{ background: "#B3A66A" }}
              className={styles.smallInfoContainer}
            >
              <span>On Leave Today</span>

              <span style={{ marginTop: "15px" }}>
                Everyone is working today!
              </span>
              <span style={{ fontSize: "13px" }}>
                No one is on leave today.
              </span>
            </div>
            <div className={styles.smallInfoContainer}></div>
            <div
              style={{ background: "#5FC1C9" }}
              className={styles.smallInfoContainer}
            >
              <span>
                Time Today - <span>{getTime()}</span>
              </span>

              <span>Current Time : </span>
              <span>03:25 pm</span>
            </div>
            <div
              style={{ background: "#C58BB2" }}
              className={styles.smallInfoContainer}
            ></div>
          </div>
        </div>

        <div className={styles.eachContainer}>
          <div style={{ gap: "10px" }} className={styles.centerContainerLayout}>
            <span>ORGANIZATION : </span>
            <span>Ariel software solutions</span>
          </div>
          <div
            className={`${styles.GivePraiseContainer} ${styles.centerContainerLayout}`}
          >
            <span style={{ fontWeight: "bolder" }}>Praise</span>
            <input type="text" placeholder="Give praise from here.." />
          </div>
          <div className={styles.centerContainerLayout}>
            <span>No announcements</span>
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
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
