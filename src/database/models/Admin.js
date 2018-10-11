'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(127),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(127),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(63),
    },
    remember_token: {
      type: DataTypes.STRING(63),
      allowNull: true,
      defaultValue: null,
    },
    role: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
      tableName: 'admins',
      timestamps: true,
      underscored: true
    });
  Admin.associate = function (models) {
    // associations can be defined here
  };
  return Admin;
};