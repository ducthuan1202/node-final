'use strict';
module.exports = (sequelize, DataTypes) => {
  const Office = sequelize.define('Office', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    city: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    territory: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
      tableName: 'offices',
      timestamps: true,
      underscored: true
    });
  Office.associate = function (models) {
    // associations can be defined here
  };
  return Office;
};