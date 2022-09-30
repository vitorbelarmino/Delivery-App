"use strict";
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("sales", [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 110.90,
        delivery_address: 'rua margarida',
        delivery_number: '2',
        sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        status: 'Pendente',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 500.90,
        delivery_address: 'rua pateta',
        delivery_number: '3',
        sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        status: 'Pendente',
      }
    ], { timestamps: false });
  },
  down: async(queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("sales", null, {});
  },
}