'use strict';

const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = {

  up: (queryInterface, Sequelize) => { // sequelize db:seed:all

    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');

    const dataSeeding = [
      {
        name: 'Nguyen Duc Thuan',
        email: 'ducthuan1202@gmail.com',
        password: bcrypt.hashSync('admin@123', bcrypt.genSaltSync(10)),
        remember_token: null,
        role: 1,
        status: 1,
        created_at: currentTime,
        updated_at: currentTime,
      },
      {
        name: 'Duc Thuan',
        email: 'thuannd@gmail.com',
        password: bcrypt.hashSync('abcd!@#$', bcrypt.genSaltSync(10)),
        remember_token: null,
        role: 1,
        status: 1,
        created_at: currentTime,
        updated_at: currentTime,
      },
    ];
    return queryInterface.bulkInsert('admins', dataSeeding, {});
  },

  down: (queryInterface, Sequelize) => { // sequelize db:seed:undo:all
    return queryInterface.bulkDelete('admins', null, {});
  }

};

/**
 * var password = 'admin@123'
 * 
 * general password:
 * var hash = bcrypt.hashSync(password, 10); //$2b$10$XscO.FMIwldVbDCwVV1eTOhrStqACpnUx6d4Kz1xyiOaoHd7e2aIC
 * 
 * compare password: 
 * var check = bcrypt.compareSync(password, hash); // true
 */