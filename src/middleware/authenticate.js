const tokenService = require("../lib/token");
const userService = require("../lib/user");
const { authenticationError } = require("../utils/error");
const { getUserDTO } = require("../utils");

const authenticate = async (req, _res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const decoded = tokenService.decodeToken({ token });
    const user = await userService.findUserByEmail(decoded.email);

    if (!user) {
      next(authenticationError());
    }
    if (!user.confirmed) {
      next(
        authenticationError(
          "Your account is not verified. Please verify your account",
        ),
      );
    }
    if (user.blocked) {
      next(authenticationError("Your account is blocked"));
    }
    const userDTO = getUserDTO(user);
    console.log(userDTO);
    req.user = { userDTO, id: user._id };
    next();
  } catch (e) {
    next(authenticationError());
  }
};

module.exports = authenticate;
