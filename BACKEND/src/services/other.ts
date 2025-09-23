import { Request, Response } from "express";
import { holdedUsers } from "../global";
import PostModel from "../models/postDoc";
import fs from "fs/promises";
import UserModel from "../models/userDoc";
import { PrismaClient } from "@prisma/client";

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
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }

  renderPostImage = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(404).json({ error: "post id missing !!" });
        return;
      }

      const post = await PostModel.findById(id);
      if (!post || !post.postContent) {
        res.status(404).json({ error: "Post doesn't exists !!!" });
        return;
      }
      const fileBuffer = await fs.readFile(post.postContent.url);
      console.log(fileBuffer);

      res.setHeader("Content-Type", post.postContent.contentType);
      res.send(fileBuffer);
    } catch (error) {
      res.status(505).json({ error: "Internal error : Image not found!!" });
      return;
    }
  };

  renderProfileImage = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(404).json({ error: "profile id missing !!" });
        return;
      }

      const profile = await UserModel.findById(id);
      console.log("this is the profile !!", profile);

      if (!profile || !profile.profileContent) {
        res.status(404).json({ error: "Post doesn't exists !!!" });
        return;
      }
      let url = profile.profileContent.url;
      if (!url.includes(".")) {
        url = url + ".jpg";
      }
      const fileBuffer = await fs.readFile(url);
      console.log(fileBuffer);

      res.setHeader("Content-Type", profile.profileContent.contentType);
      res.send(fileBuffer);
    } catch (error) {
      console.log(error);
      res.status(505).json({ error: "Internal error : Image not found!!" });
      return;
    }
  };

  renderEmployeeImage = async (req: Request, res: Response) => {
    try {
      const id = req.params.id.toString();
      console.log("this is the id", id);
      const prisma = new PrismaClient();
      if (!id) {
        res.status(404).json({ error: "profile id missing !!" });
        return;
      }

      const profile = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });

      console.log("this is the profile !!", profile);

      if (!profile || !profile.profileUrl) {
        res.status(404).json({ error: "Post doesn't exists !!!" });
        return;
      }
      let url = profile.profileUrl;
      if (!url.includes(".")) {
        url = url + ".jpg";
      }
      const fileBuffer = await fs.readFile(url);
      console.log(fileBuffer);

      res.setHeader("Content-Type", "image/jpg");
      res.send(fileBuffer);
    } catch (error) {
      console.log(error);
      res.status(505).json({ error: "Internal error : Image not found!!" });
      return;
    }
  };

  fetchAllComments = async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
      const prisma = new PrismaClient();
      const comments = await prisma.comment.findMany({
        where: {
          postId: postId,
        },
        include: {
          user: {
            select: {
              name: true,
              profileUrl: true,
            },
          },
        },
      });

      if (!comments) {
        res.status(404).json({ message: "no comments !!" });
        return;
      }
      res.status(200).json({ comments });
      return;
    } catch (error) {
      res.status(505).json({ error: "Internal error : Image not found!!" });
      return;
    }
  };
}

export const otherServices = new OtherServices();

export default OtherServices;
