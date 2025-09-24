import React, { useState } from "react";
import styles from "@/styles/login.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { ApiEndPoints } from "@/API";
import OtpPopup from "@/Comp/OtpModel";
import Loader from "@/modules/Loader";

const UserSignInSchema = z.object({
  email: z.string().email(""),
  passcode: z.string().min(1),
});

type UserSignIn = z.infer<typeof UserSignInSchema>;

const Login: React.FC = () => {
  const [otpModelEnable, setOtpModelEnable] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignIn>({
    resolver: zodResolver(UserSignInSchema),
    mode: "onBlur",
  });

  const handleSignIn = async (data: UserSignIn) => {
    console.log("this is the signin data", data);
    setLoading(true);
    try {
      const loginRes = await fetch(ApiEndPoints.loginApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await loginRes.json();
      if (loginRes.ok) {
        setOtpModelEnable(true);
        setUserId(result.userId);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {otpModelEnable && userId && <OtpPopup userId={userId} />}
      {loading && <Loader />}
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <div className={styles.logo}>Hire Link</div>
          <h2 className={styles.title}>Welcome Back</h2>
          <p className={styles.subtitle}>Sign in to continue to your account</p>

          <form onSubmit={handleSubmit(handleSignIn)} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="passcode"
                {...register("passcode")}
                placeholder="Enter your password"
                required
              />
              {errors.passcode && (
                <span style={{ color: "red" }}>{errors.passcode.message}</span>
              )}
            </div>

            <button type="submit" className={styles.button}>
              Login
            </button>
          </form>

          <div className={styles.footer}>
            <a href="">Forgot Password?</a>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.overlay}>
            <h1>HIRE LINK</h1>
            <p>Manage leaves, attendance, and employee details in one place</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
