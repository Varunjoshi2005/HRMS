import { Request } from "express";
import mongoose from "mongoose";

interface AuthRequest extends Request {
  user?: any;
}

interface TokenUser {
  id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  role: string;
}

interface UserDetails {
  email: string;
  cardId: string;
  workLocation: string;
  name: string;
  password: string;
  profileUrl?: string;
  phoneNumber: string;
  role: string;
  businessUnit: string;
  department: string;
  reportManager: string;
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
  UserDetails,
  PersonalDetailsProps,
  AddharDetails,
  AddressDetails,
  ContactDetailsProps,
  IdentityDetails,
  PanCardDetails,
};
