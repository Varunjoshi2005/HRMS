import styles from "@/styles/MainProfile.module.css";
import { Mail, Phone, MapPin, IdCard } from "lucide-react";
import userLogo from "@/assets/userLogo.jpg";
import { useState } from "react";
import type { TabType } from "@/types";
import Tab from "@/modules/Profile/Tabs";

function Profile() {
  const [currentTab, setTab] = useState<TabType>({ type: "about" });

  return (
    <div className={styles.profileContainer}>
      <div className={styles.coverSection}>
        <div className={styles.avatarContainer}>
          <img src={userLogo} alt="User" className={styles.avatar} />
        </div>
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>Varun Joshi</h2>
          <p className={styles.userRole}>💼 Software developer</p>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <Mail size={16} />
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            style={{ color: "blue", cursor: "pointer" }}
          >
            varunjoshi12@gmail.com
          </a>
        </div>
        <div className={styles.infoItem}>
          <Phone size={16} /> +91-6283312114
        </div>
        <div className={styles.infoItem}>
          <MapPin size={16} /> Mohali
        </div>
        <div className={styles.infoItem}>
          <IdCard size={16} /> <span>ARLE271</span>
        </div>
      </div>

      <div className={styles.workInfo}>
        <div>
          <strong>Business Unit</strong>
          <p>Ariel Software Solutions</p>
        </div>
        <div>
          <strong>Department</strong>
          <p>Development</p>
        </div>
        <div>
          <strong>Reporting Manager</strong>
          <p>None</p>
        </div>
      </div>

      <div className={styles.tabs}>
        <span
          className={`${currentTab.type == "about" && styles.active}`}
          onClick={() => setTab({ type: "about" })}
        >
          About
        </span>
        <span
          className={`${currentTab.type == "profile" && styles.active}`}
          onClick={() => setTab({ type: "profile" })}
        >
          Profile
        </span>
        <span
          className={`${currentTab.type == "job" && styles.active}`}
          onClick={() => setTab({ type: "job" })}
        >
          Job
        </span>
        <span
          className={`${currentTab.type == "document" && styles.active}`}
          onClick={() => setTab({ type: "document" })}
        >
          Documents
        </span>
        <span
          className={`${currentTab.type == "assets" && styles.active}`}
          onClick={() => setTab({ type: "assets" })}
        >
          Assets
        </span>
      </div>

      <Tab currentTab={currentTab} />
    </div>
  );
}

export default Profile;
