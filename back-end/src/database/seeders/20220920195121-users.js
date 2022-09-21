module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Lewis Hamilton',
        email: 'admin@gmail.com',
        password: '123456',
        role: 'admin',
      },
      {
        id: 2,
        name: 'Michael Schumacher',
        email: 'seller@gmail.com',
        password: '123456',
        role: 'seller',
      },
      {
        id: 3,
        name: 'Michael Schumacher',
        email: 'customer@gmail.com',
        password: '123456',
        role: 'customer',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
