import Profile from "@/modules/Profile";
import styles from "../styles/Navbar.module.css";
import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <nav data-navbar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "80%",
        }}
      >
        <span className={styles.logo}>Hire-Link</span>

        <span style={{ fontSize: "14px" }}>Ariel Software Solutions</span>

        <div className={styles.search}>
          <Search size={20} color="gray" />
          <input
            type="text"
            placeholder="Search employees or actions (Ex Apply Leave)"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginRight: "20px",
        }}
      >
        <Bell color="white" />
        <Profile />
      </div>
    </nav>
  );
}

export default Navbar;
