import type { Response, Request } from "express";
import auth from "../authentication/auth";
import bcrypt from "bcryptjs";
import { TokenUser } from "../types";
import { generateOTP, transporter } from "../utils";
import { holdedUsers } from "../global";
import { PrismaClient } from "@prisma/client";

class UserServices {
  EmployeeLogin = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    try {
      const { email, passcode } = req.body;
      if (!email || !passcode) {
        res.status(400).json({ error: "Credentials missing!" });
        return;
      }

      const employee = await prisma.employee.findUnique({
        where: { email },
        include: {
          profileContent: true,
          personalDetails: true,
          addressDetails: true,
          contactDetails: true,
          indentityDetails: {
            include: {
              addharDetails: true,
              panDetails: true,
            },
          },
        },
      });

      if (!employee) {
        res
          .status(404)
          .json({ error: "Employee with this email doesn't exist!" });
        return;
      }

      const verifyPassword = await bcrypt.compare(passcode, employee.password);
      if (!verifyPassword) {
        res.status(401).json({ error: "Invalid passcode!" });
        return;
      }

      const tokenUser: TokenUser = {
        id: employee.id,
        username: employee.name,
        email: employee.email,
        role: employee.role || "USER",
      };
      const data = auth.GenerateToken(tokenUser);
      if (!data.success) {
        res.status(500).json({ error: "Failed to login!" });
        return;
      }

      const OTP = this.GenerateAndSendOTP(employee.email);
      const userId = employee.id.toString();
      const { createdAt, updatedAt, password, ...employeeRemaning } = employee;
      console.log("this is info", employeeRemaning);
      let employeeInfo: any = { ...employeeRemaning };
      employeeInfo.token = data.data?.token;
      holdedUsers.set(userId, {
        otp: OTP.toString(),
        user: employeeInfo,
      });

      res.status(200).json({ message: "OTP sent!", userId: employee.id });
      return;
    } catch (error: any) {
      res
        .status(500)
        .json({ error: `Internal server error: ${error.message}` });
      return;
    } finally {
      await prisma.$disconnect();
    }
  };

  UserLogin = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ error: "Email or Password Missing!" });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { email },
        include: {
          userRoles: { include: { role: true } },
        },
      });

      if (!user) {
        res.status(404).json({ error: "User with this email doesn't exist!" });
        return;
      }

      const verifyPassword = await bcrypt.compare(password, user.password);
      if (!verifyPassword) {
        res.status(401).json({ error: "Invalid passcode!" });
        return;
      }

      let roleName = "USER";
      if (user.userRoles && user.userRoles.length > 0) {
        roleName = user.userRoles[0].role.roleName;
      }

      const userData: TokenUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: roleName,
      };

      const data = auth.GenerateToken(userData);
      if (!data.success) {
        res.status(500).json({ error: "Failed to login!" });
        return;
      }

      const OTP = this.GenerateAndSendOTP(userData.email);
      const userId = user.id.toString();
      holdedUsers.set(userId, { otp: OTP.toString(), user: data.data });

      res.status(200).json({ message: "OTP sent!", userId: userData.id });
      return;
    } catch (error: any) {
      res
        .status(500)
        .json({ error: `Internal server error: ${error.message}` });
      return;
    } finally {
      await prisma.$disconnect();
    }
  };

  GenerateAndSendOTP = (userEmail: string) => {
    const OTP = generateOTP();

    transporter
      .sendMail({
        from: `"HIRE-LINK" <${process.env.EMAIL_USER}>`,
        to: userEmail,
        subject: "✅ Your OTP Code",
        text: `Here is your OTP code to continue: ${OTP}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px;">
        
        <!-- Header -->
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee;">
          <h2 style="color: #2c3e50; margin: 0;">HIRE-LINK</h2>
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
             ${OTP}
            </p>
          </div>
          <p style="font-size: 14px; color: #555;">
            This OTP will expire in <strong>10 minutes</strong>. Please do not share it with anyone for security reasons.
          </p>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; font-size: 12px; color: #999; padding-top: 20px; border-top: 1px solid #eee;">
          &copy; 2025 Your HIRE-LINK. All rights reserved.<br/>
          This is an automated email, please do not reply.
        </div>
      </div>
    `,
      })
      .then(() => console.log("OTP SENT"))
      .catch((err: any) => {
        console.log(err);
      });

    return OTP;
  };

  verifyOtp(req: Request, res: Response) {
    try {
      const { otp, userId } = req.body;
      if (!otp || otp.length < 5 || !userId) {
        return res.status(400).json({ error: "Invalid OTP" });
      }

      const data = holdedUsers.get(userId);
      console.log("this is the data", data);
      if (!data?.otp || !data?.user) {
        return res.status(400).json({ error: "User/OTP not exists" });
      }
      if (data.otp !== otp) {
        return res.status(400).json({ error: "Invalid OTP" });
      }
      holdedUsers.delete(userId);
      return res.status(200).json({ message: "OTP verified", data: data.user });
    } catch (error) {
      console.error("verifyOtp error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export const userServices = new UserServices();

export default UserServices;
