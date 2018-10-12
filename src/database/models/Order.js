'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    required_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    shipped_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
      tableName: 'orders',
      timestamps: true,
      underscored: true
    });
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};