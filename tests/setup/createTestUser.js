const { User } = require("../../src/models");

// Helper function to create a new user with a token
const createTestUser = async (roleId) => {
  return await User.create({
    name: "Ibrahim Sifat",
    username: "username",
    email: "ibsifat900@gmail.com",
    confirmed: true,
    blocked: false,
    role: roleId,
    password: "string",
  });
};
module.exports = createTestUser;
