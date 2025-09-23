import type { Request, Response } from "express";
import PostModel from "../models/postDoc";
import fs from "fs/promises";
import { uploadPath } from "../path";
import UserModel from "../models/userDoc";
import { PrismaClient } from "@prisma/client";

class PostServices {
  uploadPost = async (req: Request, res: Response) => {
    try {
      const { userId, caption } = req.body;
      const postFile = req.file;

      if (!userId || !postFile) {
        res
          .status(404)
          .json({ message: "failed to post something missing !!" });
        return;
      }
      const newPost = new PostModel();

      const checkUser = await UserModel.findById(userId).populate("roleId");

      const result: any = checkUser;
      if (
        !checkUser ||
        !checkUser.roleId ||
        result.roleId.roleName != "ADMIN"
      ) {
        res.status(404).json({ error: "Not allowed to post!!" });
        return;
      }
      newPost.userId = userId;
      if (caption) newPost.caption = caption;

      if (postFile) {
        const status = await this.savePostInDisk(postFile);
        if (!status) {
          res.status(404).json({ error: "error uploading post !!" });
          return;
        }
        if (newPost.postContent) {
          newPost.postContent.url = status.url;
          newPost.postContent.contentType = postFile.mimetype;
        }
      }

      const savedPost = await newPost.save();
      if (!savedPost) {
        res.status(404).json({ error: "failed to save image!!" });
        return;
      }

      res.status(202).json({ message: "post uploaded sucessfully!!" });
      return;
    } catch (error: any) {
      res
        .status(505)
        .json({ error: "Internal server error : Failed to post!!" });
      console.log(error.message);
      return;
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
    try {
      console.log("getting rqeuest");
      const posts = await PostModel.find({}).populate(
        "userId",
        "username imageUrl"
      );
      console.log(posts);
      if (!posts) {
        res.status(404).json({ message: "No posts available!" });
        return;
      }
      res.status(202).json({ posts: posts });
      return;
    } catch (error: any) {
      res
        .status(505)
        .json({ error: "Internal server error : Failed to post!!" });
      console.log(error.message);
      return;
    }
  };
}

export const postServices = new PostServices();

export default PostServices;
