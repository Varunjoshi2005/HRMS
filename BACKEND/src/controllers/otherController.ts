import type { Response, Request, RequestHandler } from "express";
import { otherServices } from "../services/other";

class PostController {
    handleVerifyOtp: RequestHandler = (req: Request, res: Response) => {
        otherServices.verifyOtp(req, res);
    }
}

const otherController = new PostController();

export default otherController;
