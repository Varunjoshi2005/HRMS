import type { Response, Request, RequestHandler } from "express";
import { otherServices } from "../services/other";

class PostController {
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

  handleVerifyPasscode: RequestHandler = (req: Request, res: Response) => {
    otherServices.verifyUserPasscode(req, res);
  };
}

const otherController = new PostController();

export default otherController;
