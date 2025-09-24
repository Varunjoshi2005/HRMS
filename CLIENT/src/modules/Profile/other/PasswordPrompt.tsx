import type React from "react";
import styles from "./passcode.module.css";
import { handleVerifyPasscode } from "@/services";
import { useEffect, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import type { ViewRequestType } from "../Tabs/ProfileTab";
import Loader from "@/modules/Loader";
interface PasscodeProps {
  onCancel: React.Dispatch<React.SetStateAction<boolean>>;
  setViewPanCardNumber: React.Dispatch<React.SetStateAction<boolean>>;
  setViewAadhaarNumber: React.Dispatch<React.SetStateAction<boolean>>;
  viewRequest: ViewRequestType;
}

function PasswordPrompt({
  onCancel,
  viewRequest,
  setViewAadhaarNumber,
  setViewPanCardNumber,
}: PasscodeProps) {
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [message, setMessage] = useState<{
    msg: string;
    type: "ERR" | "MSG";
  } | null>(null);

  const { user } = useUserContext();

  const [loader, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage(null);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message]);

  async function VerifyPasscode() {
    if (enteredPassword.length == 0) {
      setMessage({ type: "ERR", msg: "Field can not be empty !!" });
      return;
    }
    setLoading(true);

    const userId = user.id;
    const status = await handleVerifyPasscode(
      user.token,
      userId,
      enteredPassword
    );
    setLoading(false);

    if (!status.verified) {
      setMessage({ msg: status.message, type: "ERR" });
      return;
    }

    switch (viewRequest.request) {
      case "AADHAAR": {
        setViewAadhaarNumber(true);
        onCancel(false);
        setMessage({ msg: status.message, type: "MSG" });
        break;
      }
      case "PAN": {
        setViewPanCardNumber(true);
        onCancel(false);
        setMessage({ msg: status.message, type: "MSG" });
        break;
      }
      default: {
        onCancel(false);
        setMessage({ msg: status.message, type: "MSG" });
        break;
      }
    }
  }

  return (
    <>
      {loader && <Loader />}
      <div className={styles.overlay}>
        <div className={styles.passcodePrompt}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              fontWeight: "bolder",
              padding: "5px",
            }}
          >
            <span>VERIFY IT 'S YOU</span>
          </div>

          <div className={styles.centerPasswordAndButton}>
            <input
              type="password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              id={styles.inputField}
              placeholder="Enter your password..."
            />

            <div style={{ display: "flex", gap: "20px" }}>
              <button onClick={VerifyPasscode} id={styles.submitButton}>
                Submit
              </button>
              <button onClick={() => onCancel(false)} id={styles.cancelButton}>
                Cancel
              </button>
            </div>

            {message && (
              <span style={{ color: message.type == "ERR" ? "red" : "green" }}>
                {message.msg}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordPrompt;
