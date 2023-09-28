const mongoose = require("mongoose");
const { hashing } = require("../utils");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    resetPasswordCode: {
      type: String,
      select: false,
    },
    resetPasswordRCodeExpires: {
      type: Date,
      default: null,
      select: false,
    },
    passwordResetAttempts: {
      type: Number,
      default: 0,
      select: false,
    },
    confirmationCode: {
      type: String,
      select: false,
    },
    confirmationCodeExpires: {
      type: Date,
      default: null,
      select: false,
    },
    emailVerificationAttempts: {
      type: Number,
      default: 0,
      select: false,
    },
    confirmed: {
      type: Boolean,
    },
    blocked: {
      type: Boolean,
    },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);
UserSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await hashing.generateHash(this.password);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
