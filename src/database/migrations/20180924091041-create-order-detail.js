'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity_ordered: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_each: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      order_line_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order_details');
  }
};