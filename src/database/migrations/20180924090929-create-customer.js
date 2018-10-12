'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(63),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(63),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(127),
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(63),
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING(63),
        allowNull: true,
      },
      postal_code: {
        type: Sequelize.STRING(31),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(31),
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};