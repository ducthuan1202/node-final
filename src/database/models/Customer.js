'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    first_name: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(63),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(63),
      allowNull: true,
    },
    postal_code: {
      type: DataTypes.STRING(31),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  }, {
      tableName: 'customers',
      timestamps: true,
      underscored: true
    });

  Customer.associate = function (models) {
    // associations can be defined here
  };

  return Customer;
};