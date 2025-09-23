import { Router } from "express";
import postController from "../controllers/postController";
import { upload } from "../config";

const router = Router();

router.post("/upload-post", upload.single("postFile"), (req, res, next) => {
  postController.handleUploadNewPost(req, res, next);
});

router.get("/get-posts", (req, res, next) => {
  postController.handleGetPosts(req, res, next);
});

router.post("/add-comment", (req, res, next) => {
  postController.handleAddNewComment(req, res, next);
});

export default router;
