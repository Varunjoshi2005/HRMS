import { Router } from "express";
import otherController from "../controllers/otherController";

const router = Router();

router.post("/verify-otp", (req, res, next) => {
  otherController.handleVerifyOtp(req, res, next);
});

router.get("/fetch-comments/:postId", (req, res, next) => {
  otherController.handleFetchComments(req, res, next);
});

router.get("/render-employeeProfile/:id", (req, res, next) => {
  otherController.handleRenderEmployeeProfile(req, res, next);
});

router.get("/render-profile/:id", (req, res, next) => {
  otherController.handleRenderProfile(req, res, next);
});

router.get("/render-post/:id", (req, res, next) => {
  otherController.handleRenderPost(req, res, next);
});

export default router;
