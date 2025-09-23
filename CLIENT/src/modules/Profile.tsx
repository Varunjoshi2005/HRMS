import { colors, ProfileOptions } from "@/utils";
import styles from "../styles/Profile.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/UserContext";
import { ACTIONS } from "@/types";
import { ApiEndPoints } from "@/API";

function Profile() {
  const [toogleBoxVisisble, setToogleBoxVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { personalDetails } = user;
  const initials = `${personalDetails.firstName?.toString().charAt(0) || ''}${personalDetails.lastName?.toString().charAt(0) || ''}`;

  const { dispatch } = useUserContext();
  return (
    <>
      <div
        onClick={() => setToogleBoxVisible((prev) => !prev)}
        className={styles.ProfileIcon}
      >
        {user.profileContent ? (
          <img
            src={`${ApiEndPoints.renderEmployeeProfile}/${user.id}`}
            alt=""
            width={50}
            style={{ objectFit: "contain", borderRadius: "50%" }}
          />
        ) : (
          <span>{personalDetails ? `${initials}` : "U"}</span>
        )}
        {toogleBoxVisisble && (
          <div className={styles.dropDownProfileBox}>
            {ProfileOptions.map((each) => {
              const Icon = each.icon;
              return (
                <div
                  onClick={() => {
                    if (each.link == "/logout") {
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

            <div>
              {colors.map((each) => (
                <span
                  style={{
                    backgroundColor: each,
                    width: "20px",
                    height: "20px",
                  }}
                ></span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
