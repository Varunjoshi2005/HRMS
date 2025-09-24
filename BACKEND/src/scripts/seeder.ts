import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { userdata } from "./admin";
import fs from "fs/promises";
import { employeeData } from "./data";


const prisma = new PrismaClient();

const AutoCreateUser = async (userdata: {
  username: string;
  email: string;
  password: string;
  imageBuffer?: Buffer;
  contentType?: string;
  role: "ADMIN" | "SUPER ADMIN";
}) => {
  try {
    const hashPassword = await bcrypt.hash(userdata.password, 10);

    let role = await prisma.role.findFirst({
      where: { roleName: userdata.role },
    });

    if (!role) {
      role = await prisma.role.create({
        data: {
          roleName: userdata.role,
        },
      });
    }

    const user = await prisma.user.create({
      data: {
        username: userdata.username,
        email: userdata.email,
        password: hashPassword,
      },
    });

    if (userdata.imageBuffer) {
      await prisma.userProfileContent.create({
        data: {
          buffer: userdata.imageBuffer,
          contentType: userdata.contentType || "image/png",
          userId: user.id,
        },
      });
    }

    await prisma.userRole.create({
      data: {
        userId: user.id,
        roleId: role.id,
      },
    });

    console.log("✅ Seeded : Auto Generate Entry ", userdata);
  } catch (err) {
    console.error("❌ Error seeding user: ", err);
  }
};


const AutoAddEmployee = async () => {
  const hashPassword = await bcrypt.hash(employeeData.password, 10);

  const {
    personalDetails,
    contactDetails,
    addressDetails,
    indentityDetails, // keeping your spelling
    ...employeeBase
  } = employeeData;

  // 1. Create employee
  const employee = await prisma.employee.create({
    data: {
      ...employeeBase,
      password: hashPassword,
    },
  });

  // 2. Primary details
  if (personalDetails?.create) {
    await prisma.primaryDetails.create({
      data: {
        ...personalDetails.create,
        userId: employee.id,
      },
    });
  }

  // 3. Contact details
  if (contactDetails?.create) {
    await prisma.contactDetails.create({
      data: {
        ...contactDetails.create,
        userId: employee.id,
      },
    });
  }

  // 4. Address details
  if (addressDetails?.create) {
    await prisma.addressDetails.create({
      data: {
        ...addressDetails.create,
        userId: employee.id,
      },
    });
  }

  // 5. Identity details + Aadhaar + PAN
  if (indentityDetails?.create) {
    const identityDetails = await prisma.identityDetails.create({
      data: {
        userId: employee.id,
      },
    });

    // Aadhaar
    if (indentityDetails.create.addharDetails?.create) {
      await prisma.addharDetails.create({
        data: {
          ...indentityDetails.create.addharDetails.create,
          identityId: identityDetails.id, // ✅ FIXED
        },
      });
    }

    // PAN
    if (indentityDetails.create.panDetails?.create) {
      await prisma.panCardDetails.create({
        data: {
          ...indentityDetails.create.panDetails.create,
          identityId: identityDetails.id, // ✅ FIXED
        },
      });
    }
  }

  console.log("✅ Employee created successfully!!", employee);
  return employee;
};



async function GenerateBuffer() {
  let newData: any = { ...userdata };
  if (newData.imagePath) {
    const buffer = await fs.readFile(newData.imagePath);
    newData.imageBuffer = buffer;
  }
  await AutoCreateUser(newData);
}

async function main() {
  await GenerateBuffer();
  // await AutoAddEmployee();
  await prisma.$disconnect();
}

main();


