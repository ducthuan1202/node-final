'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(127),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(127),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(63),
      },
      remember_token: {
        type: Sequelize.STRING(63),
        allowNull: true,
        defaultValue: null,
      },
      role: {
        type: Sequelize.STRING(31),
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('admins');
  }
};