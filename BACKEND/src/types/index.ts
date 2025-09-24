import { Request } from "express";
import mongoose from "mongoose";

interface AuthRequest extends Request {
  user?: any;
}

interface TokenUser {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface EmployeeDetails {
  email: string;
  cardId: string;
  workLocation: string;
  name: string;
  designation: string;
  password: string;
  phoneNumber: string;
  role: string;
  businessUnit: string;
  department: string;
  reportManager?: string;
}

interface PersonalDetailsProps {
  create: {
    firstName: string;
    middleName?: string;
    lastName: string;
    gender: string;
    displayName: string;
    dob: string;
    maritalStatus: boolean;
    bloodGroup: string;
    physicallyHandicap: boolean;
    nationality: string;
  };
}

interface ContactDetailsProps {
  create: {
    workEmail: string;
    personalEmail: string;
    mobileNumber: string;
    workNumber?: string;
    residenceNumber?: string;
  };
}

interface AddressDetails {
  create: {
    address: string;
    zipCode: string;
    city: string;
    state: string;
  };
}

interface IdentityDetails {
  create: {
    addharDetails: AddharDetails;
    panDetails: PanCardDetails;
  };
}

interface AddharDetails {
  create: {
    name: string;
    address: string;
    enrollmentNumber: string;
    addharNumber: string;
    gender: string;
    dob: string;
  };
}

interface PanCardDetails {
  create: {
    applicantName: string;
    fatherName: string;
    panNumber: string;
    dob: string;
  };
}

export {
  AuthRequest,
  TokenUser,
  EmployeeDetails,
  PersonalDetailsProps,
  AddharDetails,
  AddressDetails,
  ContactDetailsProps,
  IdentityDetails,
  PanCardDetails,
};
