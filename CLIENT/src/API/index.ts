const BACKEND_URL = import.meta.env.VITE_BACKEND_URL!;

export const ApiEndPoints = {
  loginApi: `${BACKEND_URL}/account/login`,
  otpVerifyApi: `${BACKEND_URL}/api/verify-otp`,
};
