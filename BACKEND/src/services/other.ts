import { Request, Response } from "express";
import { holdedUsers } from "../global";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class OtherServices {

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

  renderPostImage = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).json({ error: "Post ID missing" });
      }

      const post = await prisma.post.findUnique({
        where: { id },
        include: { postContent: true },
      });

      if (!post || !post.postContent || !post.postContent.buffer) {
        return res.status(404).json({ error: "Post image doesn't exist" });
      }

      res.setHeader("Content-Type", post.postContent.contentType || "image/jpg");
      return res.send(Buffer.from(post.postContent.buffer));
    } catch (error) {
      console.error("renderPostImage error:", error);
      return res.status(500).json({ error: "Internal error: Image not found" });
    }
  };

  renderProfileImage = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).json({ error: "Profile ID missing" });
      }

      const user = await prisma.user.findUnique({
        where: { id },
        include: { profileContent: true },
      });

      if (!user || !user.profileContent || !user.profileContent.buffer) {
        return res.status(404).json({ error: "Profile image doesn't exist" });
      }

      res.setHeader("Content-Type", user.profileContent.contentType || "image/jpg");
      return res.send(Buffer.from(user.profileContent.buffer));
    } catch (error) {
      console.error("renderProfileImage error:", error);
      return res.status(500).json({ error: "Internal error: Image not found" });
    }
  };

  renderEmployeeImage = async (req: Request, res: Response) => {
    try {
      const id = req.params.id?.toString();
      console.log("this is the id", id);
      if (!id) {
        return res.status(404).json({ error: "Profile ID missing" });
      }

      const employee = await prisma.employee.findUnique({
        where: { id },
        include: { profileContent: true },
      });

      if (!employee || !employee.profileContent || !employee.profileContent.buffer) {
        return res.status(404).json({ error: "Profile image doesn't exist" });
      }

      res.setHeader("Content-Type", employee.profileContent.contentType || "image/jpg");
      return res.send(Buffer.from(employee.profileContent.buffer));
    } catch (error) {
      console.error("renderEmployeeImage error:", error);
      return res.status(500).json({ error: "Internal error: Image not found" });
    }
  };

  fetchAllComments = async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json({ error: "Post ID missing" });
      }

      const comments = await prisma.comment.findMany({
        where: { postId },
        include: {
          user: {
            select: {
              name: true,
              profileContent: {
                select: {
                  contentType: true,
                  buffer: true,
                },
              },
            },
          },
        },
      });

      if (!comments || comments.length === 0) {
        return res.status(404).json({ message: "No comments" });
      }
      return res.status(200).json({ comments });
    } catch (error) {
      console.error("fetchAllComments error:", error);
      return res.status(500).json({ error: "Internal error: Comments not found" });
    }
  };
}

export const otherServices = new OtherServices();

export default OtherServices;
