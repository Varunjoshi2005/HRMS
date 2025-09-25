import { Router } from "express";
import userController from "../controllers/userController";
import { upload } from "../config";

const router = Router();

router.post("/verify-otp", (req, res, next) => {
  userController.handleVerifyOtp(req, res, next);
});
router.post("/login", (req, res, next) => {
  userController.handleLogin(req, res, next);
});

router.post("/employee-login", (req, res, next) => {
  userController.handleEmployeeLogin(req, res, next);
});

export default router;
