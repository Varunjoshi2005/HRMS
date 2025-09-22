import { Request, Response } from "express";
import { holdedUsers } from "../global";

class OtherServices {

    verifyOtp(req: Request, res: Response) {
        try {
            const { otp, userId } = req.body;
            if (!otp || otp.length < 5 || !userId) {
                res.status(400).json({ error: "Invalid OTP" });
                return;
            }


            const data = holdedUsers.get(userId);
            console.log("this is the data", data);
            if (!data?.otp || !data?.user) {
                res.status(400).json({ error: "not exists!!" });
                return;
            }
            if (data.otp !== otp) {
                res.status(400).json({ error: "Invalid OTP!!" });
                return;
            }
            holdedUsers.delete(userId);
            res.status(200).json({ message: "OTP verified", data: data.user });
            return;

        }
        catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }


    }


}

export const otherServices = new OtherServices();

export default OtherServices;
