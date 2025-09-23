import type { Employee } from "@/types";
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

const MenuMoreOptions = new Map<string, any[]>([
  [
    "Me",
    [
      { name: "Attendance", link: "/attendance" },
      { name: "Leave", link: "/leave" },
      { name: "Performance", link: "/performance" },
      { name: "Expenses & Travel", link: "/expenses" },
      { name: "Helpdesk", link: "/helpdesk" },
      { name: "Rewards", link: "/rewards" },
      { name: "Apps", link: "/apps" },
    ],
  ],
  [
    "My Finance",
    [
      { name: "Summary", link: "/my-finance/summary" },
      { name: "My Pay", link: "/my-finance/pay" },
      { name: "Manage Tax", link: "/my-finance/tax" },
    ],
  ],
  [
    "Org",
    [
      { name: "Employees", link: "/org/employees" },
      { name: "Documents", link: "/org/documents" },
      { name: "Engage", link: "/org/engage" },
      { name: "Hiring", link: "/org/hiring" },
    ],
  ],
  ["My teams", [{ name: "Summary", link: "/my-teams/summary" }]],

  [
    "Performance",
    [
      { name: "KRAs", link: "/performance/kras" },
      { name: "1:1 Meetings", link: "/performance/meetings" },
      { name: "Skills", link: "/performance/skills" },
      { name: "Growth", link: "/performance/growth" },
    ],
  ],

  [
    "Learn",
    [
      { name: "Course Library", link: "/learn/library" },
      { name: "My Courses", link: "/learn/my-courses" },
    ],
  ],

  [
    "Engage",
    [
      { name: "Announcements", link: "/engage/announcements" },
      { name: "Rewards", link: "/engage/rewards" },
      { name: "Polls", link: "/engage/polls" },
      { name: "Articles", link: "/engage/articles" },
    ],
  ],
]);

const ProfileOptions = [
  { name: "View profile", link: "/profile", icon: User },
  { name: "Change Password", link: "/change-password", icon: Key },
  { name: "Logout", link: "/logout", icon: Power },
];

const colors = ["#5746AF", "#2986CE", "#B64F79", "#86C06A", "#E1983D"];

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

const employees: Employee[] = [
  {
    id: 1,
    name: "Abdul Raza",
    role: "Software Engineer Consultant",
    department: "Development",
    location: "Mohali",
    email: "abdul@arielsoftwares.in",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    businessUnit: "IT",
    costCenter: "1002",
    legacyEntry: "no",
  },
  {
    id: 2,
    name: "Abhishek Partap Singh",
    role: "Software Trainee",
    department: "Development",
    location: "Mohali",
    email: "abhishekp@arielsoftwares.in",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    businessUnit: "IT",
    costCenter: "1002",
    legacyEntry: "yes",
  },
  {
    id: 3,
    name: "Abhishek Sharma",
    role: "Software Engineer",
    department: "Development",
    location: "Mohali",
    email: "abhishek@arielsoftwares.in",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    businessUnit: "IT",
    costCenter: "1002",
    legacyEntry: "no",
  },
  {
    id: 4,
    name: "Akash Uniyal",
    role: "Jr. Software Engineer",
    department: "Development",
    location: "Mohali",
    email: "akash@arielsoftwares.in",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    businessUnit: "HR",
    costCenter: "1001",
    legacyEntry: "no",
  },
  {
    id: 5,
    name: "Akhil Mittal",
    role: "Software Engineer",
    department: "Development",
    location: "Mohali",
    email: "akhil@arielsoftwares.in",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    businessUnit: "Finance",
    costCenter: "1003",
    legacyEntry: "yes",
  },
  {
    id: 6,
    name: "Amandeep Singh",
    role: "Software Engineer Consultant",
    department: "Development",
    location: "Mohali",
    email: "amandeepsingh@arielsoftwares.in",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    businessUnit: "Operations",
    costCenter: "1002",
    legacyEntry: "no",
  },
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

function timeAgo(timestamp: string) {
  const now = Number(new Date());
  const past = Number(new Date(timestamp));
  const diff = (now - past) / 1000;

  if (diff < 60) {
    return `${Math.floor(diff)} seconds ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff < 2592000) {
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff < 31536000) {
    return `${Math.floor(diff / 2592000)} months ago`;
  } else {
    return `${Math.floor(diff / 31536000)} years ago`;
  }
}

export {
  Options,
  ProfileOptions,
  colors,
  profileItem,
  dummyUsers,
  getTime,
  timeAgo,
  employees,
  MenuMoreOptions,
};
