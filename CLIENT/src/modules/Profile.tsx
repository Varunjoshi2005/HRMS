import { colors, ProfileOptions } from "@/utils";
import styles from "../styles/Profile.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [toogleBoxVisisble, setToogleBoxVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => setToogleBoxVisible((prev) => !prev)}
        className={styles.ProfileIcon}
      >
        <span style={{ userSelect: "none" }}>V</span>
        {toogleBoxVisisble && (
          <div className={styles.dropDownProfileBox}>
            {ProfileOptions.map((each) => {
              const Icon = each.icon;
              return (
                <div>
                  <Icon color="gray" size={18} />
                  <span onClick={() => navigate(each.link)}>{each.name}</span>
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
