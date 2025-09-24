import { useUserContext } from "@/context/UserContext";
import styles from "./tab.module.css";
import indiaLogo from "@/assets/india.png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import PasswordPrompt from "../other/PasswordPrompt";

export interface ViewRequestType {
  request: "PAN" | "AADHAAR";
}

function ProfileTab() {
  const { user } = useUserContext();

  const [viewAadhaarNumber, setViewAadhaarNumber] = useState<boolean>(false);
  const [viewPanCardNumber, setViewPanCardNumber] = useState<boolean>(false);

  const [viewRequest, setViewRequest] = useState<ViewRequestType | null>(null);

  const [enablePasscodePrompt, setEnablePasscodePrompt] =
    useState<boolean>(false);

  const { personalDetails, contactDetails, addressDetails, indentityDetails } =
    user;

  const { addharDetails, panDetails } = indentityDetails;

  return (
    <>
      {enablePasscodePrompt && viewRequest && (
        <PasswordPrompt
          onCancel={setEnablePasscodePrompt}
          viewRequest={viewRequest}
          setViewAadhaarNumber={setViewAadhaarNumber}
          setViewPanCardNumber={setViewPanCardNumber}
        />
      )}

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
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  opacity: "0.6",
                }}
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
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.firstName}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>MIDDLE NAME</span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.middleName
                      ? personalDetails.middleName
                      : "-not-set-"}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    LAST NAME
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.lastName}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>DISPLAY NAME</span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.displayName}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    GENDER
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.gender}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>DATE OF BIRTH</span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.dob}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    MARITAL STATUS
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.maritalStatus ? "MARRIED" : "UNMARRIED"}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>BLOOD GROUP</span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.bloodGroup}
                  </span>
                </span>
              </div>

              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    PHYSICALLY HANDICAPPED
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.physicallyHandicap ? "yes" : "no"}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    NATIONALITY
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {personalDetails.nationality}
                  </span>
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
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  opacity: "0.6",
                }}
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
                    {contactDetails.workEmail}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>PERSONAL EMAIL</span>
                  <span style={{ fontSize: "12px" }}>
                    {contactDetails.personalEmail}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    MOBILE NUMBER
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {contactDetails.mobileNumber}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>WORK NUMBER</span>
                  <span style={{ fontSize: "12px" }}>
                    {contactDetails.workNumber
                      ? contactDetails.workNumber
                      : "-not-set-"}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    RESIDENCE NUMBER
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {contactDetails.residenceNumber
                      ? contactDetails.residenceNumber
                      : "-not-set-"}
                  </span>
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
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  opacity: "0.6",
                }}
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
                    {addressDetails.address}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>COUNTRY</span>
                  <span style={{ fontSize: "12px" }}>
                    {addressDetails.country}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    CITY
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {addressDetails.city}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>PIN CODE</span>
                  <span style={{ fontSize: "12px" }}>
                    {addressDetails.zipCode}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    STATE
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {addressDetails.state}
                  </span>
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
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  opacity: "0.6",
                }}
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
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  opacity: "0.6",
                }}
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
                    <span style={{ fontSize: "12px" }}>
                      {!viewAadhaarNumber ? (
                        <span>
                          {`XXXX-XXXX-${addharDetails.addharNumber
                            .toString()
                            .substring(10, 14)}`}
                          <EyeOff
                            cursor={"pointer"}
                            onClick={() => {
                              setViewRequest({ request: "AADHAAR" });
                              setEnablePasscodePrompt(true);
                            }}
                          />
                        </span>
                      ) : (
                        <span>
                          {addharDetails.addharNumber}
                          <Eye
                            cursor={"pointer"}
                            onClick={() => setViewAadhaarNumber(false)}
                          />
                        </span>
                      )}
                    </span>
                  </span>

                  <span id={styles.innerInfo}>
                    <span style={{ fontWeight: "bolder" }}>
                      ENROLLMENT NUMBER
                    </span>
                    <span style={{ fontSize: "12px" }}>
                      {addharDetails.enrollmentNumber
                        ? addharDetails.enrollmentNumber
                        : "Not available"}
                    </span>
                  </span>
                </div>
                <div className={styles.innerDetails}>
                  <span id={styles.innerInfo}>
                    <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                      NAME
                    </span>
                    <span style={{ fontSize: "12px" }}>
                      {addharDetails.name}
                    </span>
                  </span>

                  <span id={styles.innerInfo}>
                    <span style={{ fontWeight: "bolder" }}>DATE OF BIRTH</span>
                    <span style={{ fontSize: "12px" }}>
                      {addharDetails.dob}
                    </span>
                  </span>
                </div>
                <div className={styles.innerDetails}>
                  <span id={styles.innerInfo}>
                    <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                      ADDRESS
                    </span>
                    <span style={{ fontSize: "12px" }}>
                      {addharDetails.address
                        ? addharDetails.address
                        : "not Available"}
                    </span>
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
                    <span style={{ fontSize: "12px" }}>
                      {!viewPanCardNumber ? (
                        <span>
                          {`XXXX-XXXX-${panDetails.panNumber
                            .toString()
                            .substring(8, 10)}`}
                          <EyeOff
                            cursor={"pointer"}
                            onClick={() => {
                              setViewRequest({ request: "PAN" });
                              setEnablePasscodePrompt(true);
                            }}
                          />
                        </span>
                      ) : (
                        <span>
                          {panDetails.panNumber}
                          <Eye
                            cursor={"pointer"}
                            onClick={() => setViewPanCardNumber(false)}
                          />
                        </span>
                      )}
                    </span>
                  </span>

                  <span id={styles.innerInfo}>
                    <span style={{ fontWeight: "bolder" }}>DATE-OF-BIRTH</span>
                    <span style={{ fontSize: "12px" }}>{panDetails.dob}</span>
                  </span>
                </div>
                <div className={styles.innerDetails}>
                  <span id={styles.innerInfo}>
                    <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                      NAME
                    </span>
                    <span style={{ fontSize: "12px" }}>
                      {panDetails.applicantName}
                    </span>
                  </span>

                  <span id={styles.innerInfo}>
                    <span style={{ fontWeight: "bolder" }}>FATHER'S NAME</span>
                    <span style={{ fontSize: "12px" }}>
                      {panDetails.fatherName}
                    </span>
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
                  <span style={{ fontSize: "12px" }}>
                    {!viewAadhaarNumber ? (
                      <span>
                        {`XXXX-XXXX-${addharDetails.addharNumber
                          .toString()
                          .substring(10, 14)}`}
                        <EyeOff
                          cursor={"pointer"}
                          onClick={() => {
                            setViewRequest({ request: "AADHAAR" });
                            setEnablePasscodePrompt(true);
                          }}
                        />
                      </span>
                    ) : (
                      <span>
                        {addharDetails.addharNumber}
                        <Eye
                          cursor={"pointer"}
                          onClick={() => setViewAadhaarNumber(false)}
                        />
                      </span>
                    )}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>
                    ENROLLMENT NUMBER
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {addharDetails.enrollmentNumber
                      ? addharDetails.enrollmentNumber
                      : "Not available"}
                  </span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    NAME
                  </span>
                  <span style={{ fontSize: "12px" }}>{addharDetails.name}</span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder" }}>DATE OF BIRTH</span>
                  <span style={{ fontSize: "12px" }}>{addharDetails.dob}</span>
                </span>
              </div>
              <div className={styles.innerDetails}>
                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    ADDRESS
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {addharDetails.address
                      ? addharDetails.address
                      : "Not available"}
                  </span>
                </span>

                <span id={styles.innerInfo}>
                  <span style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    GENDER
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {addharDetails.gender}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileTab;
