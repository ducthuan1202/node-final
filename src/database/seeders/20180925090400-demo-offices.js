'use strict';

const BaseSeeder = require('../../common/BaseSeeder');

module.exports = {  
  up: (queryInterface, Sequelize) => { // sequelize db:seed:all
    const dataSeeding = [];
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      dataSeeding.push(BaseSeeder.demoOffice());
    }
    return queryInterface.bulkInsert('offices', dataSeeding, {});
  },

  down: (queryInterface, Sequelize) => { // sequelize db:seed:undo:all
    return queryInterface.bulkDelete('offices', null, {});
  }
};