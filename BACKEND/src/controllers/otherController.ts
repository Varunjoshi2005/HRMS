import type { Response, Request, RequestHandler } from "express";
import { otherServices } from "../services/other";

class PostController {
  handleVerifyOtp: RequestHandler = (req: Request, res: Response) => {
    otherServices.verifyOtp(req, res);
  };

  handleRenderPost: RequestHandler = (req: Request, res: Response) => {
    otherServices.renderPostImage(req, res);
  };

  handleRenderProfile: RequestHandler = (req: Request, res: Response) => {
    otherServices.renderProfileImage(req, res);
  };

  handleRenderEmployeeProfile: RequestHandler = (
    req: Request,
    res: Response
  ) => {
    otherServices.renderEmployeeImage(req, res);
  };

  handleFetchComments: RequestHandler = (req: Request, res: Response) => {
    otherServices.fetchAllComments(req, res);
  };
}

const otherController = new PostController();

export default otherController;
