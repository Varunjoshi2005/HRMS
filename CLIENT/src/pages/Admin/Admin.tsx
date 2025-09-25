import { ApiEndPoints } from "@/API";
import OtpPopup from "@/Comp/OtpModel";
import Loader from "@/modules/Loader";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const UserSignInSchema = z.object({
  email: z.string().email(""),
  password: z.string().min(1),
});

type UserSignIn = z.infer<typeof UserSignInSchema>;

const AdminLogin: React.FC = () => {
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
      const loginRes = await fetch(ApiEndPoints.adminLoginApi, {
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
      <div className="flex h-screen">
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-700 to-purple-600 items-center justify-center relative">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
            alt="HRMS Dashboard"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <h1 className="text-white text-4xl font-bold relative z-10 drop-shadow-lg">
            Welcome Admin
          </h1>
        </div>

        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-96 border border-white/20"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Admin Login
            </h2>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full border rounded-xl p-3 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter admin email"
                required
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="w-full border rounded-xl p-3 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter password"
                required
              />

              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 shadow-lg transition"
            >
              Login
            </button>

            <p className="text-center text-gray-600 text-sm mt-6">
              Forgot your password?{" "}
              <a href="" className="text-blue-600 hover:underline">
                Reset here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
