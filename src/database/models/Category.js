'use strict';

const Helper = require("../../common/Helper");
const
  PUBLIC_STATUS = 1,
  DRAFT_STATUS = 2,
  TRASHED_STATUS = 3;

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "Tên phải từ 6-255 ký tự.",
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description không được để trống",
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Image URL không được để trống",
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
      tableName: 'categories',
      timestamps: true,
      underscored: true
    });
  Category.associate = function (models) {
    // associations can be defined here
  };

  /** add method for class - as method in class php */
  Category.prototype.PUBLIC_STATUS = PUBLIC_STATUS;
  Category.prototype.DRAFT_STATUS = DRAFT_STATUS;
  Category.prototype.TRASHED_STATUS = TRASHED_STATUS;

  Category.prototype.getStatus = function () {
    return [
      { label: "Public", value: PUBLIC_STATUS },
      { label: "Draft", value: DRAFT_STATUS },
      { label: "Trashed", value: TRASHED_STATUS },
    ];
  };

  Category.prototype.formatCreatedAt = function () {
    return Helper.formatTime(this.created_at);
  }

  Category.prototype.formatUpdatedAt = function () {
    return Helper.formatTime(this.updated_at);
  }

  Category.prototype.formatStatus = function () {
    const listStatus = this.getStatus();
    const status = listStatus.find(item => item.value == this.status);
    return (status) ? `<span>${status.label}</span>` : `<span>N/A</span>`;
  }

  Category.prototype.getUrl = function (nextPath = '') {
    if (typeof nextPath !== 'string') return `javascript:;`;
    if (nextPath.length) return `/admin/categories/${nextPath}`;
    return `/admin/categories`;
  }

  Category.prototype.getUrlView = function () {
    return this.getUrl(`${this.id}/show`);
  }

  Category.prototype.getUrlEdit = function () {
    return this.getUrl(`${this.id}/edit`);
  }

  Category.prototype.getUrlCreate = function () {
    return this.getUrl(`create`);
  }

  Category.prototype.getUrlList = function () {
    return this.getUrl();
  }

  Category.prototype.getFormAction = function () {
    return (this.isNewRecord) ? this.getUrl(`store`) : this.getUrl(`${this.id}/update`);
  }

  return Category;
};