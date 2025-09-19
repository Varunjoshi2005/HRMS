import {
  Home,
  User,
  Building2,
  Inbox,
  Users,
  MessageSquare,
  BarChart3,
  BookOpen,
  Key,
  Power,
} from "lucide-react";

const Options = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Me", icon: Users, link: "/me" },
  { name: "Inbox", icon: Inbox, link: "/inbox" },
  { name: "My teams", icon: Building2, link: "/my-teams" },
  { name: "My Finance", icon: User, link: "/my-finance" },
  { name: "Org", icon: BarChart3, link: "/org" },
  {
    name: "Engage",
    icon: MessageSquare,
    link: "/engage",
  },
  { name: "Performance", icon: BookOpen, link: "/performance" },
  { name: "Learn", icon: BookOpen, link: "/learn" },
];

const ProfileOptions = [
  { name: "View profile", link: "/profile", icon: User },
  { name: "Change Password", link: "/settings", icon: Key },
  { name: "Logout", link: "/logout", icon: Power },
];

const colors = ["red", "green", "blue", "purple", "orange"];

const profileItem = [
  { name: "ABOUT", link: "/about" },
  { name: "PROFILE", link: "/profile" },
  { name: "JOB", link: "/job" },
  { name: "DOCUMENTS", link: "/documents" },
  { name: "ASSETS", link: "/assets" },
  { name: "LEARN", link: "/learn" },
];

const dummyUsers = [
  { name: "Anjali", date: "29 September" },
  { name: "Naveen", date: "06 October" },
  { name: "Shubham", date: "06 October" },
  { name: "Ankit", date: "16 October" },
  { name: "Ankit", date: "16 October" },
  { name: "Ankit", date: "16 October" },
];

function getTime() {
  const date = new Date(Date.now());

  return `${getWeekday(date.getDay())}, ${date.getDay()} ${getMonthName(
    date.getMonth()
  )} ${date.getFullYear()}`;
}

function getMonthName(monthIndex: number) {
  switch (monthIndex) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month";
  }
}

function getWeekday(num: number) {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid number (choose 1-7)";
  }
}

export { Options, ProfileOptions, colors, profileItem, dummyUsers, getTime };
