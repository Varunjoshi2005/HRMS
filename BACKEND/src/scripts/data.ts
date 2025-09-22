import {
  AddharDetails,
  AddressDetails,
  ContactDetailsProps,
  IdentityDetails,
  PanCardDetails,
  PersonalDetailsProps,
  UserDetails,
} from "../types";

const userdata = {
  username: "hr admin",
  email: "hradmin@yopmail.com",
  password: "admin@123",
  role: "ADMIN",
};

const user: UserDetails = {
  email: "john.doe@example.com",
  cardId: "CARD123456",
  workLocation: "Bangalore",
  name: "John Doe",
  password: "hashedpassword123",
  profileUrl: "https://example.com/profile.jpg",
  phoneNumber: "9876543210",
  role: "USER",
  businessUnit: "Technology",
  department: "Engineering",
  reportManager: "Jane Smith",
};

const personalDetails: PersonalDetailsProps = {
  create: {
    firstName: "John",
    middleName: "A",
    lastName: "Doe",
    gender: "Male",
    displayName: "John D.",
    dob: "1990-01-01",
    maritalStatus: false,
    bloodGroup: "O+",
    physicallyHandicap: false,
    nationality: "Indian",
  },
};

const contactDetails: ContactDetailsProps = {
  create: {
    workEmail: "john.doe@company.com",
    personalEmail: "john.personal@example.com",
    mobileNumber: "9876543210",
    workNumber: "0801234567",
    residenceNumber: "0807654321",
  },
};

const addressDetails: AddressDetails = {
  create: {
    address: "123, MG Road",
    zipCode: "560001",
    city: "Bangalore",
    state: "Karnataka",
  },
};

const panDetails: PanCardDetails = {
  create: {
    applicantName: "John Doe",
    fatherName: "Richard Doe",
    panNumber: "ABCDE1234F",
    dob: "1990-01-01",
  },
};

const addharDetails: AddharDetails = {
  create: {
    name: "John Doe",
    addharNumber: "1234-5678-9012",
    gender: "Male",
    dob: "1990-01-01",
  },
};

const indentityDetails: IdentityDetails = {
  create: {
    addharDetails: { ...addharDetails },
    panDetails: { ...panDetails },
  },
};

const dummyUser = {
  ...user,
  personalDetails: { ...personalDetails },
  contactDetails: { ...contactDetails },
  addressDetails: { ...addressDetails },
  indentityDetails: { ...indentityDetails },
};

export { dummyUser, userdata };
