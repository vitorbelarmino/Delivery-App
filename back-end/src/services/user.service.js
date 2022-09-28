const { Users } = require('../database/models');

const getUserByRole = async (role) => {
  const users = await Users.findAll({ where: { role } });
  return users;
};

module.exports = {
  getUserByRole,
};