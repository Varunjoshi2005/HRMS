import styles from "../styles/TopProfile.module.css";
import userLogo from "@/assets/userLogo.jpg";
import { profileItem } from "@/utils";
import { Mail, MapPin, Briefcase } from "lucide-react";

function Profile() {
  return (
    <div>
      <div className={styles.profileContainer}>
        <div className={styles.userProfile}>
          <img
            src={userLogo}
            alt="User Logo"
            width={100}
            style={{ objectFit: "contain" }}
          />

          <div className={styles.userInfoBox}>
            <h1 style={{ fontSize: "1.2rem", fontWeight: "bolder" }}>
              Varun Joshi
            </h1>

            <div className={styles.userDetails}>
              <span>
                <Mail color="gray" size={16} />
                <span style={{ color: "blue", cursor: "pointer" }}>
                  varunjoshi1590@gmail.com
                </span>
              </span>
              <span>
                <MapPin color="gray" size={16} />
                <span>India</span>
              </span>
              <span>
                <Briefcase color="gray" size={16} />
                <span>Web Developer</span>
              </span>
            </div>

            <div className={styles.userDetails}>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "gray" }}>DEPARTMENT</span>
                <span>ABCDEF</span>
              </span>

              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "gray" }}>BUSSINESS UNIT</span>
                <span>XYZ</span>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.profileOptions}>
          {profileItem.map(({ name }, index) => (
            <span key={index} className={styles.profileOption}>
              {name}
            </span>
          ))}
        </div>

        <div className={styles.profileOptions}>
          {["Summary", "Timeline", "Well Activity", "Awards"].map(
            (item, index) => (
              <span key={index} className={styles.profileOption}>
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
