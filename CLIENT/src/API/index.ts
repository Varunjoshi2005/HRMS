const BACKEND_URL = import.meta.env.VITE_BACKEND_URL!;

export const ApiEndPoints = {
  loginApi: `${BACKEND_URL}/account/employee-login`,
  otpVerifyApi: `${BACKEND_URL}/api/verify-otp`,
  postApi: `${BACKEND_URL}/post/get-posts`,
  renderPostApi: `${BACKEND_URL}/api/render-post`,
  renderProfileApi: `${BACKEND_URL}/api/render-profile`,
  renderEmployeeProfile: `${BACKEND_URL}/api/render-employeeProfile`,
  commentsApi: `${BACKEND_URL}/api/fetch-comments`,
};
