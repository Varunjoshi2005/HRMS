import { Router } from "express";
import otherController from "../controllers/otherController";

const router = Router();

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
