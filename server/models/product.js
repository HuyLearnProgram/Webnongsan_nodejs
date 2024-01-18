'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    Product_ID: DataTypes.INTEGER,
    Product_Name: DataTypes.STRING,
    Price: DataTypes.DECIMAL,
    Image: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    Detail: DataTypes.BIGINT,
    Posting_Date: DataTypes.DATE,
    Unit: DataTypes.STRING,
    Category_ID: DataTypes.INTEGER,
    Account_ID: DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};