import { Request, Response } from "express";
import { holdedUsers } from "../global";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

class OtherServices {
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

      res.setHeader(
        "Content-Type",
        post.postContent.contentType || "image/jpg"
      );
      res.send(post.postContent.buffer);
      return;
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

      res.setHeader(
        "Content-Type",
        user.profileContent.contentType || "image/jpg"
      );
      res.send(Buffer.from(user.profileContent.buffer));
      return;
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

      if (
        !employee ||
        !employee.profileContent ||
        !employee.profileContent.buffer
      ) {
        return res.status(404).json({ error: "Profile image doesn't exist" });
      }

      res.setHeader(
        "Content-Type",
        employee.profileContent.contentType || "image/jpg"
      );
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
      return res
        .status(500)
        .json({ error: "Internal error: Comments not found" });
    }
  };

  verifyUserPasscode = async (req: Request, res: Response) => {
    try {
      const { userId, currentPassword } = req.body;
      if (!userId || !currentPassword) {
        res.status(404).json({ error: "field's required!!" });
        return;
      }

      const user = await prisma.employee.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        res.status(404).json({ error: "user doesn't exists!!" });
        return;
      }

      const checkPassword = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!checkPassword) {
        res.status(404).json({ error: "invalid password!!" });
        return;
      }

      res.status(202).json({ message: "veified !!" });
      return;
    } catch (error) {
      console.error("fetchAllComments error:", error);
      return res
        .status(500)
        .json({ error: "Internal error: Comments not found" });
    }
  };
}

export const otherServices = new OtherServices();

export default OtherServices;
