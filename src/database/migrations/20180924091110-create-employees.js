'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
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
      extension: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(127),
        allowNull: false,
      },
      office_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      job_title: {
        type: Sequelize.STRING(63),
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
    return queryInterface.dropTable('employees');
  }
};