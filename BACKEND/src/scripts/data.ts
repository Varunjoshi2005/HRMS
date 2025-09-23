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
  username: "naveen sharma",
  email: "naveenadmin12@yopmail.com",
  password: "12",
  imageName: "admin3",
  role: "ADMIN",
  contentType: "image/png",
};

let user: UserDetails = {
  email: "varunjoshi12@yopmail.com",
  cardId: "CARD341",
  workLocation: "Mohali",
  name: "Varun Joshi",
  password: "12",
  designation: "JR. full stack developer",
  profileUrl: "https://example.com/profile.jpg",
  phoneNumber: "9876543210",
  role: "USER",
  businessUnit: "Ariel Software Solutions",
  department: "Development",
  reportManager: "Naveen sharma",
};

const personalDetails: PersonalDetailsProps = {
  create: {
    firstName: "Varun",
    middleName: "",
    lastName: "Joshi",
    gender: "Male",
    displayName: "Varun Joshi",
    dob: "1990-01-01",
    maritalStatus: false,
    bloodGroup: "O+",
    physicallyHandicap: false,
    nationality: "Indian",
  },
};

const contactDetails: ContactDetailsProps = {
  create: {
    workEmail: "varun@ariel.solutions.net",
    personalEmail: "varunjoshi12@gmail.com",
    mobileNumber: "9876543210",
    workNumber: "0801234567",
    residenceNumber: "0807654321",
  },
};

const addressDetails: AddressDetails = {
  create: {
    address: "123, MG Road",
    zipCode: "560001",
    city: "Chandigarh",
    state: "Chandigarh",
  },
};

const panDetails: PanCardDetails = {
  create: {
    applicantName: "Varun Joshi",
    fatherName: "Kamal Joshi",
    panNumber: "ABCDE1234F",
    dob: "1990-01-01",
  },
};

const addharDetails: AddharDetails = {
  create: {
    name: "Varun Joshi",
    address: "#123 XYZ street 45 CHD",
    enrollmentNumber: "4551-1233-3311",
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

let dummyUser = {
  ...user,
  personalDetails: { ...personalDetails },
  contactDetails: { ...contactDetails },
  addressDetails: { ...addressDetails },
  indentityDetails: { ...indentityDetails },
};

export { dummyUser, userdata };
