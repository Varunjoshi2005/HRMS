import { Router } from "express";
import otherController from "../controllers/otherController";

const router = Router();

router.get("/fetch-comments/:postId", (req, res, next) => {
  otherController.handleFetchComments(req, res, next);
});

router.post("/verify-passcode", (req, res, next) => {
  otherController.handleVerifyPasscode(req, res, next);
});

export default router;
