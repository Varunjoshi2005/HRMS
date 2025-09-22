import type { Request, Response } from "express";
import PostModel from "../models/postDoc";
import fs from "fs/promises";
import { uploadPath } from "../path";
import UserModel from "../models/userDoc";

class PostServices {
  uploadPost = async (req: Request, res: Response) => {
    try {
      const { userId, caption } = req.body;
      const postFile = req.file;
      console.log("this is the body data", req.body.userId, req.file);

      if (!userId || !postFile) {
        res
          .status(404)
          .json({ message: "failed to post something missing !!" });
        return;
      }
      const newPost = new PostModel();

      const checkUser = await UserModel.findById(userId);
      if (!checkUser) {
        res.status(404).json({ error: "user doesn't exsists!!" });
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
        newPost.postUrl = status.url;
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
}

export const postServices = new PostServices();

export default PostServices;
