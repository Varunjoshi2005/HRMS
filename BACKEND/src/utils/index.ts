import mongoose from "mongoose";
import nodemailer from "nodemailer";

const holdedUsers = new Map<mongoose.Types.ObjectId, any>();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL!,
    pass: process.env.USER_PASSWORD!,
  },
});

const generateOTP = () => {
  const randomOTP = Math.floor(10000 + Math.random() * 90000);
  return randomOTP;
};

export { transporter, holdedUsers, generateOTP };
