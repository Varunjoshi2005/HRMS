import type { Request, Response } from "express";
import fs from "fs/promises";
import { uploadPath } from "../path";
import { PrismaClient } from "@prisma/client";

class PostServices {

  uploadPost = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    try {
      const { userId, caption } = req.body;
      const postFile = req.file;

      if (!userId || !postFile) {
        res.status(400).json({ message: "Missing userId or file." });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          userRoles: { include: { role: true } }
        }
      });

      if (!user || !user.userRoles.some(ur => ur.role.roleName === "ADMIN")) {
        res.status(403).json({ error: "Not allowed to post!" });
        return;
      }

      const status = await this.savePostInDisk(postFile);
      if (!status) {
        res.status(500).json({ error: "Error uploading post!" });
        return;
      }

      const post = await prisma.post.create({
        data: {
          userId,
          caption,
          postContent: {
            create: {
              buffer: postFile.buffer,
              contentType: postFile.mimetype
            }
          }
        },
        include: { postContent: true }
      });

      if (!post) {
        res.status(500).json({ error: "Failed to save post!" });
        return;
      }

      res.status(201).json({ message: "Post uploaded successfully!", post });
      return;
    } catch (error: any) {
      res.status(500).json({ error: "Internal server error: Failed to post!" });
      console.log(error.message);
      return;
    } finally {
      await prisma.$disconnect();
    }
  };

  AddNewComment = async (req: Request, res: Response) => {
    try {
      const { comment, userId, postId } = req.body;
      const prisma = new PrismaClient();

      if (!comment || !userId || !postId) {
        res.status(404).json({ error: "comment or userId Missing !!" });
        return;
      }

      await prisma.comment.create({
        data: {
          comment: comment,
          userId: userId,
          postId: postId,
        },
      });

      res.status(200).json({ message: "comment added!!" });
      return;
    } catch (error: any) {
      res
        .status(505)
        .json({ error: "Internal server error : Failed to post!!" });
      console.log(error.message);
      return;
    }
  };

  savePostInDisk = async (postFile: Express.Multer.File) => {
    const fileUrl = `${uploadPath}/${Date.now() + postFile.originalname}`;
    try {
      await fs.writeFile(fileUrl, postFile.buffer);
      return {
        url: fileUrl,
        status: true,
      };
    } catch (error) {
      return false;
    }
  };

  GetPosts = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    try {
      console.log("getting request");
      const posts = await prisma.post.findMany({
        include: {
          user: {
            select: {
              username: true,
              email: true
            }
          },
          postContent: true
        }
      });
      console.log(posts);
      if (!posts || posts.length === 0) {
        res.status(404).json({ message: "No posts available!" });
        return;
      }
      res.status(200).json({ posts });
      return;
    } catch (error: any) {
      res.status(500).json({ error: "Internal server error: Failed to get posts!" });
      console.log(error.message);
      return;
    } finally {
      await prisma.$disconnect();
    }
  };
}

export const postServices = new PostServices();

export default PostServices;
