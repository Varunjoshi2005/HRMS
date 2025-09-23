import mongoose from "mongoose";
import RoleModel from "../models/roleDoc";
import UserModel from "../models/userDoc";
import UserRoleModel from "../models/userRoleDoc";
import { Config } from "../config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { dummyUser, userdata } from "./data";
import { uploadPath } from "../path";

const AutoCreateUser = async () => {
  await mongoose.connect(Config.mongodbUrl);

  const userModel = new UserModel();
  const roleModel = new RoleModel();
  const userRoleModel = new UserRoleModel();

  userModel.username = userdata.username;
  userModel.email = userdata.email;
  if (userModel.profileContent) {
    userModel.profileContent.url = `${uploadPath}/${
      Date.now() + userdata.imageName
    }`;
    userModel.profileContent.contentType = userdata.contentType;
  }
  const hashPassword = await bcrypt.hash(userdata.password, 10);
  userModel.password = hashPassword;

  if (userdata.role == "ADMIN") roleModel.roleName = "ADMIN";
  if (userdata.role == "SUPER ADMIN") roleModel.roleName = "SUPER ADMIN";

  const currentRole = await roleModel.save();
  userModel.roleId = currentRole._id;

  const user = await userModel.save();

  userRoleModel.roleId = currentRole._id;
  userRoleModel.userId = user._id;

  await userRoleModel.save();

  console.log("Seeded : Auto Generate Entry ", userdata);
};

const AutoAddEmployee = async () => {
  const prisma = new PrismaClient();

  console.log("this is the data ", dummyUser);

  const hashPassword = await bcrypt.hash(dummyUser.password, 10);
  dummyUser.password = hashPassword;

  const user = await prisma.user.create({
    data: dummyUser,
    include: {
      personalDetails: true,
      contactDetails: true,
      addressDetails: true,
      indentityDetails: {
        include: {
          addharDetails: true,
          panDetails: true,
        },
      },
    },
  });

  if (!user) {
    console.log("failed to create user!!");
    return;
  }

  console.log("user created successfully!!", user);

  return;
};

// AutoAddEmployee();

// AutoCreateUser();
