const User = require("../models/User/User");
const asyncHandler = require("express-async-handler");

const isBlocked = asyncHandler(async (req, res, next) => {
  try {
    //get the login
    const user = await User.findById(req.user);
    //check user plan
    if (user?.isBlocked) {
      return res.status(401).json({
        message: "Account is blocked, please contact admin",
      });
    }
    next();
  } catch (error) {
    return res.json(error);
  }
});

module.exports = isBlocked;
