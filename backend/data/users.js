import bcrypt from "bcryptjs";

const Users = [
  {
    name: "Admin User",
    email: "admin.user@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "harsha",
    email: "harsha.user@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "oreki",
    email: "oreki.user@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default Users;
