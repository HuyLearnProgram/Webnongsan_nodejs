'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    Order_ID: DataTypes.INTEGER,
    Order_Time: DataTypes.DATE,
    Order_Status: DataTypes.INTEGER,
    Account_ID: DataTypes.INTEGER,
    Address: DataTypes.INTEGER,
    Total_Price: DataTypes.DECIMAL,
    Payment_Method: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};