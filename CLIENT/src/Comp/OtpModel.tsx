import React, { useState } from "react";
import styles from "@/styles/otp.module.css";
import { useUserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "@/types";
import { ApiEndPoints } from "@/API";

interface OtpPopupProps {
    userId: string;
}

const OtpPopup: React.FC<OtpPopupProps> = ({ userId }) => {
    const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
    const navigate = useNavigate();

    const { dispatch } = useUserContext();


    const handleChange = (value: string, index: number) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 4) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    function handleLoginActions(data: any) {
        dispatch({ type: ACTIONS.SET_USER, payload: data });
        localStorage.setItem("user-details", JSON.stringify(data));
        navigate("/");
        return;
    }

    const handleSubmit = async () => {
        if (otp.length < 5) return;

        const enteredOtp = otp.join("");

        try {
            const response = await fetch(ApiEndPoints.otpVerifyApi, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, otp: enteredOtp }),
            });
            const result = await response.json();
            if (response.ok) {
                handleLoginActions(result.data);
            }
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <h2 className={styles.title}>Enter OTP</h2>
                <div className={styles.inputContainer}>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className={styles.inputBox}
                        />
                    ))}
                </div>
                <div className={styles.buttons}>

                    <button className={styles.submitBtn} onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpPopup;
