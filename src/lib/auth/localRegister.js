const generateUniqueCode = require("../../utils/generateUniqueCode");
const { badRequest } = require("../../utils/error");
const { userExist, createUser, findByUsername } = require("../user/utils");
const sendVerificationEmail = require("../../utils/mail/sendVerificationEmail");
const { Role } = require("../../models");

const localRegister = async ({ name, username, email, password }) => {
  try {
    const existingUser = await userExist(email);
    if (existingUser) {
      throw badRequest("User already exist");
    }
    const existingUsername = await findByUsername(username);
    if (existingUsername) {
      throw badRequest("Username already taken, try another one");
    }
    const getRole = (await Role.findOne({ name: "user" })) || "user";
    // Generate hashed password
    const userObj = {
      name,
      username,
      email,
      password,
      confirmationCode: generateUniqueCode(),
      confirmed: false,
      blocked: false,
      role: getRole.id,
      resetPasswordCode: "",
      resetPasswordRCodeExpires: "",
      passwordResetAttempts: 0,
      confirmationCodeExpires: Date.now() + 3600000, // 1 hour from now
      emailVerificationAttempts: 0,
    };
    const newUser = await createUser({ ...userObj });
    // Send email verification email
    const emailResult = await sendVerificationEmail(newUser);
    return emailResult;
  } catch (error) {
    throw badRequest(error.message);
  }
};
module.exports = localRegister;
