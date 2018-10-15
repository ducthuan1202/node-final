'use strict';

const BaseSeeder = require('../../common/BaseSeeder');

module.exports = {  
  up: (queryInterface, Sequelize) => { // sequelize db:seed:all
    const dataSeeding = [];
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      dataSeeding.push(BaseSeeder.demoEmployees());
    }
    return queryInterface.bulkInsert('employees', dataSeeding, {});
  },

  down: (queryInterface, Sequelize) => { // sequelize db:seed:undo:all
    return queryInterface.bulkDelete('employees', null, {});
  }
};