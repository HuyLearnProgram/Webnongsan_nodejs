'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RFToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RFToken.init({
    Account_ID: DataTypes.INTEGER,
    refresh_token: DataTypes.STRING,
    expire_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RFToken',
  });
  return RFToken;
};