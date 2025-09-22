import styles from "./tab.module.css";
import indiaLogo from "@/assets/india.png";

function ProfileTab() {
  return (
    <div className={styles.profileInfoContainer}>
      <div className={styles.primaryAndContact}>
        <div className={styles.boxContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "10px",
              borderBottom: "1px solid rgba(196, 196, 196, 0.589)",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "1.2rem", fontWeight: "bold", opacity: "0.6" }}
            >
              Primary Details
            </span>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: "bold",
                opacity: "0.6",
              }}
            >
              Edit
            </span>
          </div>

          <div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  FIRST NAME
                </span>
                <span style={{ fontSize: "12px" }}>varun joshi</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>MIDDLE NAME</span>
                <span style={{ fontSize: "12px" }}>-not-set-</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  LAST NAME
                </span>
                <span style={{ fontSize: "12px" }}>Joshi</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>DISPLAY NAME</span>
                <span style={{ fontSize: "12px" }}>Varun Joshi</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  GENDER
                </span>
                <span style={{ fontSize: "12px" }}>Male</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>DATE OF BIRTH</span>
                <span style={{ fontSize: "12px" }}>19-02-2005</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  MARITAL STATUS
                </span>
                <span style={{ fontSize: "12px" }}>Unmarried</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>BLOOD GROUP</span>
                <span style={{ fontSize: "12px" }}>B+ (B positive)</span>
              </span>
            </div>

            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  PHYSICALLY HANDICAPPED
                </span>
                <span style={{ fontSize: "12px" }}>No</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  NATIONALITY
                </span>
                <span style={{ fontSize: "12px" }}>Indian</span>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              borderBottom: "1px solid rgba(196, 196, 196, 0.589)",
              padding: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "1.2rem", fontWeight: "bold", opacity: "0.6" }}
            >
              Contact Details
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                opacity: "0.6",
              }}
            >
              Edit
            </span>
          </div>

          <div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  WORK EMAIL
                </span>
                <span style={{ fontSize: "12px" }}>
                  varun@areilsolution.net
                </span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>PERSONAL EMAIL</span>
                <span style={{ fontSize: "12px" }}>
                  varunjoshi1590@gmail.com
                </span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  MOBILE NUMBER
                </span>
                <span style={{ fontSize: "12px" }}>Joshi</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>WORK NUMBER</span>
                <span style={{ fontSize: "12px" }}>-not-set-</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  RESIDENCE NUMBER
                </span>
                <span style={{ fontSize: "12px" }}>-not-set-</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.primaryAndContact}>
        <div className={styles.boxContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              borderBottom: "1px solid rgba(196, 196, 196, 0.589)",
              padding: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "1.2rem", fontWeight: "bold", opacity: "0.6" }}
            >
              Address
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                opacity: "0.6",
              }}
            >
              Edit
            </span>
          </div>

          <div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  PERMENENT ADDRESS
                </span>
                <span style={{ fontSize: "12px" }}>
                  #1231 xyz street 45 chandigarh
                </span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>COUNTRY</span>
                <span style={{ fontSize: "12px" }}>India</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  CITY
                </span>
                <span style={{ fontSize: "12px" }}>Chandigarh</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>PIN CODE</span>
                <span style={{ fontSize: "12px" }}>160101</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  STATE
                </span>
                <span style={{ fontSize: "12px" }}>chandigarh</span>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.boxContainer} style={{ height: "200px" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              borderBottom: "1px solid rgba(196, 196, 196, 0.589)",
              padding: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "1.2rem", fontWeight: "bold", opacity: "0.6" }}
            >
              Relations
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                opacity: "0.6",
              }}
            >
              Edit
            </span>
          </div>
        </div>
      </div>

      <div className={styles.primaryAndContact}>
        <div className={styles.boxContainer}></div>

        <div className={styles.boxContainer} style={{ height: "900px" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "10px",
              borderBottom: "1px solid rgba(196, 196, 196, 0.589)",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "1.2rem", fontWeight: "bold", opacity: "0.6" }}
            >
              Identity Details
            </span>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: "bold",
                opacity: "0.6",
              }}
            >
              Edit
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontWeight: "bolder", padding: "10px", color: "gray" }}
            >
              Photo-ID
            </span>

            <span
              style={{
                display: "flex",
                gap: "5px",
                padding: "5px",
                borderBottom: "1px solid rgba(196, 196, 196, 0.589)",
                alignItems: "center",
              }}
            >
              <img src={indiaLogo} alt="" width={30} />
              <span>Aadhaar Card</span>
              <span id={styles.verification}>VERIFIED</span>
            </span>

            <div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    AADHAAR-NUMBER
                  </span>
                  <span style={{ fontSize: "12px" }}>4511-1456-1313</span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>
                    ENROLLMENT NUMBER
                  </span>
                  <span style={{ fontSize: "12px" }}>Not available</span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    NAME
                  </span>
                  <span style={{ fontSize: "12px" }}>Varun Joshi</span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>DATE OF BIRTH</span>
                  <span style={{ fontSize: "12px" }}>19-02-2005</span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    ADDRESS
                  </span>
                  <span style={{ fontSize: "12px" }}>Chandigarh</span>
                </span>
              </div>
            </div>

            <span
              style={{
                display: "flex",
                gap: "5px",
                padding: "5px",
                borderBottom: "1px solid rgba(196, 196, 196, 0.589)",
                alignItems: "center",
              }}
            >
              <img src={indiaLogo} alt="" width={30} />
              <span>Pan Card</span>
              <span id={styles.verification}>VERIFIED</span>
            </span>

            <div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    PERMENENT ACCOUNT NUMBER
                  </span>
                  <span style={{ fontSize: "12px" }}>4511-1456-1313</span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>DATE-OF-BIRTH</span>
                  <span style={{ fontSize: "12px" }}>19-02-2005</span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    NAME
                  </span>
                  <span style={{ fontSize: "12px" }}>Varun Joshi</span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>FATHER'S NAME</span>
                  <span style={{ fontSize: "12px" }}>Kamal Joshi</span>
                </span>
              </div>
            </div>
          </div>

          <span
            style={{ fontWeight: "bolder", padding: "10px", color: "gray" }}
          >
            Address Proof
          </span>

          <span
            style={{
              display: "flex",
              gap: "5px",
              padding: "5px",
              borderBottom: "1px solid rgba(196, 196, 196, 0.589)",
              alignItems: "center",
            }}
          >
            <img src={indiaLogo} alt="" width={30} />
            <span>Aadhaar Card</span>
            <span id={styles.verification}>VERIFIED</span>
          </span>

          <div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  AADHAAR-NUMBER
                </span>
                <span style={{ fontSize: "12px" }}>4511-1456-1313</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>ENROLLMENT NUMBER</span>
                <span style={{ fontSize: "12px" }}>Not Avaliable</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  NAME
                </span>
                <span style={{ fontSize: "12px" }}>Varun Joshi</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder" }}>DATE OF BIRTH</span>
                <span style={{ fontSize: "12px" }}>19-02-2005</span>
              </span>
            </div>
            <div className={styles.innerDetails}>
              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  ADDRESS
                </span>
                <span style={{ fontSize: "12px" }}>Chandigarh</span>
              </span>

              <span id={styles.innerInfo}>
                <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  GENDER
                </span>
                <span style={{ fontSize: "12px" }}>Not Avaliable</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;
