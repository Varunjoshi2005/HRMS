const BACKEND_URL = import.meta.env.VITE_BACKEND_URL!;

export const ApiEndPoints = {
  loginApi: `${BACKEND_URL}/account/employee-login`,
  otpVerifyApi: `${BACKEND_URL}/account/verify-otp`,
  postApi: `${BACKEND_URL}/post/get-posts`,
  renderPostApi: `${BACKEND_URL}/render/render-post`,
  renderProfileApi: `${BACKEND_URL}/render/render-profile`,
  renderEmployeeProfile: `${BACKEND_URL}/render/render-employeeProfile`,
  commentsApi: `${BACKEND_URL}/api/fetch-comments`,
  addCommentApi: `${BACKEND_URL}/post/add-comment`,
  verifyPasscodeApi: `${BACKEND_URL}/api/verify-passcode`,
  adminLoginApi: `${BACKEND_URL}/account/login`,
};
