import { colors, ProfileOptions } from "@/utils";
import styles from "../styles/Profile.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/UserContext";
import { ACTIONS } from "@/types";
import { ApiEndPoints } from "@/API";
import { useGlobalContext } from "@/context/GlobalContext";

function Profile() {
  const [toogleBoxVisisble, setToogleBoxVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user, dispatch } = useUserContext();
const {   setSelectedBgColor } = useGlobalContext();
  const { personalDetails } = user;

  const initials = `${personalDetails.firstName?.charAt(0) || ''}${personalDetails.lastName?.charAt(0) || ''}`;

  return (
    <div
      className={styles.ProfileIcon}
      onClick={() => setToogleBoxVisible((prev) => !prev)}
    >
      {user.profileContent ? (
        <img
          src={`${ApiEndPoints.renderEmployeeProfile}/${user.id}`}
          alt="Profile"
          width={50}
          style={{ objectFit: "contain", borderRadius: "50%" }}
        />
      ) : (
        <span>{personalDetails ? initials : "U"}</span>
      )}

      <div
        className={`${styles.dropDownProfileBox} ${toogleBoxVisisble ? styles.show : ""}`}
      >
        {ProfileOptions.map((each) => {
          const Icon = each.icon;
          return (
            <div className={styles.eachOptions}
              key={each.name}
              onClick={() => {
                if (each.link === "/logout") {
                  dispatch({ type: ACTIONS.REMOVE_USER });
                  localStorage.removeItem("user-details");
                  navigate("/login");
                  return;
                }
                navigate(each.link);
              }}
            >
              <Icon color="gray" size={18} />
              <span>{each.name}</span>
            </div>
          );
        })}

        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
          {colors.map((each) => (
            <span
              className={styles.eachColor}
              key={each}
              onClick={() => setSelectedBgColor(each)}
              style={{
                backgroundColor: each,
                width: "25px",
                borderRadius: "2px",
                height: "25px",
              }}
            ></span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Profile;
