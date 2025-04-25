const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

// get user by jwt token
const getUserByToken = async (token) => {
  if (!token) {
    throw new Error("Acesso negado!");
  }

  const decoded = jwt.verify(token, "secret");

  const userId = decoded.id;

  const user = await User.findOne({ _id: userId }).select("-password");

  return user;
};

module.exports = getUserByToken;
