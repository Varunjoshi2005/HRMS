import React from "react";
import styles from "@/styles/login.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { ApiEndPoints } from "@/API";
import { useUserContext } from "@/context/UserContext";
import { ACTIONS } from "@/types";
import { useNavigate } from "react-router-dom";

const UserSignInSchema = z.object({
  email: z.string().email(""),
  password: z.string().min(1),
});

type UserSignIn = z.infer<typeof UserSignInSchema>;

const Login: React.FC = () => {
  const { dispatch } = useUserContext();
  const navigate = useNavigate();
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
        //   data and message going to receive
        handleLoginActions(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleLoginActions(result: any) {
    console.log(result);
    dispatch({ type: ACTIONS.SET_USER, payload: result.data });
    localStorage.setItem("user-details", JSON.stringify(result.data));
    navigate("/");
    return;
  }

  return (
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
              id="password"
              {...register("password")}
              placeholder="Enter your password"
              required
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
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
  );
};

export default Login;
