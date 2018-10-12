'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    first_name: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    extension: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    office_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    job_title: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
      tableName: 'employees',
      timestamps: true,
      underscored: true
    });
  Employees.associate = function (models) {
    // associations can be defined here
  };
  return Employees;
};