import { Router } from "express";
import otherController
    from "../controllers/otherController";

const router = Router();

router.post("/verify-otp", (req, res, next) => {
    otherController.handleVerifyOtp(req, res, next);
});

export default router;
