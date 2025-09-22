import type { Response, Request, RequestHandler } from "express";
import { postServices } from "../services/post";

class PostController {
  handleUploadNewPost: RequestHandler = (req: Request, res: Response) => {
    postServices.uploadPost(req, res);
  };
}

const postController = new PostController();

export default postController;
