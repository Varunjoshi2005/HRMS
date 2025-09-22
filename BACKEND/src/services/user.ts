import type { Response, Request } from "express";
import auth from "../authentication/auth";
import UserModel from "../models/userDoc";
import bcrypt from "bcryptjs";
import { TokenUser } from "../types";
import RoleModel from "../models/roleDoc";
import UserRoleModel from "../models/userRoleDoc";
import { generateOTP, holdedUsers, transporter } from "../utils";

class UserServices {
  UserRegister = async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const profileImage = req.file;

      if (!username || !email || !password) {
        res.status(404).json({ error: "fields are missing !! " });
        return;
      }
      const newUser = new UserModel();
      const roleModel = new RoleModel();
      const userRole = new UserRoleModel();

      newUser.username = username;
      newUser.email = email;
      const hashPassword = await bcrypt.hash(password, 10);
      newUser.password = hashPassword;

      const role = await roleModel.save();
      newUser.roleId = role._id;

      if (profileImage) {
        // TODO : add the profile Image logic
      }

      const user = await newUser.save();
      userRole.userId = user._id;
      userRole.roleId = role._id;

      await userRole.save();

      res.status(202).json({ message: "user registered!!" });
      return;
    } catch (error) {
      res.status(505).json({ error: `Internal server error` });
      return;
    }
  };

  UserLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(404).json({ error: "Email or Password Missing!!" });
        return;
      }

      const currentUser = await UserModel.findOne({ email: email }).populate(
        "roleId"
      );
      let user: any = currentUser;

      if (!currentUser) {
        res
          .status(404)
          .json({ error: "User with this email doesn't exists!!" });
        return;
      }

      const verifyPassword = await bcrypt.compare(
        password,
        currentUser.password
      );
      if (!verifyPassword) {
        res.status(404).json({ error: "Invalid Passcode !!" });
        return;
      }

      const userData: TokenUser = {
        id: currentUser._id,
        username: currentUser.username,
        email: currentUser.email,
        role: user.roleId.roleName,
      };

      const data = auth.GenerateToken(userData);
      if (!data.success) {
        res.status(505).json({ error: "failed to login !!" });
        return;
      }

      holdedUsers.set(userData.id, data.data);

      this.GenerateAndSendOTP(userData.email);

      res.status(200).json({ message: "OTP sent !!" });
      return;
    } catch (error: any) {
      res.status(505).json({ error: `Internal server error ${error.message}` });
      return;
    }
  };

  GenerateAndSendOTP = (userEmail: string) => {
    const OTP = generateOTP();

    transporter
      .sendMail({
        from: `"Your Company" <${process.env.EMAIL_USER}>`,
        to: userEmail,
        subject: "✅ Your OTP Code",
        text: `Here is your OTP code to continue: ${OTP}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px;">
        
        <!-- Header -->
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee;">
          <h2 style="color: #2c3e50; margin: 0;">Your Company</h2>
          <p style="color: #888; font-size: 14px; margin: 5px 0 0;">Official Notification</p>
        </div>
        
        <!-- Body -->
        <div style="padding: 20px; color: #333;">
          <p style="font-size: 16px;">Hello,</p>
          <p style="font-size: 14px; line-height: 1.6;">
            Your One-Time Password (OTP) for verification is:
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <p style="font-size: 24px; font-weight: bold; color: #4CAF50; letter-spacing: 2px;">
              12345
            </p>
          </div>
          <p style="font-size: 14px; color: #555;">
            This OTP will expire in <strong>10 minutes</strong>. Please do not share it with anyone for security reasons.
          </p>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; font-size: 12px; color: #999; padding-top: 20px; border-top: 1px solid #eee;">
          &copy; 2025 Your Company. All rights reserved.<br/>
          This is an automated email, please do not reply.
        </div>
      </div>
    `,
      })
      .then(() => console.log("OTP SENT"))
      .catch((err) => {
        console.log(err);
      });

    return;
  };

  ValidateOTP = (req: Request, res: Response) => {};
}

export const userServices = new UserServices();

export default UserServices;
