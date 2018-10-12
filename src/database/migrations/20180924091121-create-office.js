'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('offices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING(63),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(31),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(63),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(63),
        allowNull: false,
      },
      postal_code: {
        type: Sequelize.STRING(31),
        allowNull: false,
      },
      territory: {
        type: Sequelize.STRING(15),
        allowNull: false,
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
    return queryInterface.dropTable('offices');
  }
};