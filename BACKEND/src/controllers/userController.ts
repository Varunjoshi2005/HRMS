import type { Response, Request, RequestHandler } from "express";
import { userServices } from "../services/user";

class UserController {
  handleLogin: RequestHandler = (req: Request, res: Response) => {
    userServices.UserLogin(req, res);
  };

  handleEmployeeLogin: RequestHandler = (req: Request, res: Response) => {
    userServices.EmployeeLogin(req, res);
  };

  handleVerifyOtp: RequestHandler = (req: Request, res: Response) => {
    userServices.verifyOtp(req, res);
  };
}

const userController = new UserController();

export default userController;
