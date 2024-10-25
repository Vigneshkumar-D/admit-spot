
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Find user by email
const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

// Create a new user
const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

// Reset user password
const resetPassword = async (user, newPassword) => {
  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
  return user;
};

module.exports = {
  findUserByEmail,
  createUser,
  resetPassword,
};
