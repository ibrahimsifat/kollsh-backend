const { User } = require("../../src/models");
const { hashing } = require("../../src/utils");

// Helper function to create a new user with a token
const createTestUser = async () => {
  await User.create({
    name: "Ibrahim Sifat",
    username: "username",
    email: "ibsifat900@gmail.com",
    confirmed: true,
    blocked: false,
    password: await hashing.generateHash("string"),
  });
};
module.exports = createTestUser;