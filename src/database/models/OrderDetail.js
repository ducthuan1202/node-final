'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity_ordered: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price_each: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    order_line_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
      tableName: 'order_details',
      timestamps: false,
      underscored: true
    });
  OrderDetail.associate = function (models) {
    // associations can be defined here
  };
  return OrderDetail;
};