"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.belongsTo(models.Role, { foreignKey: "Role_ID", as: "role" });
      Account.belongsTo(models.Address, {
        foreignKey: "Address_ID",
        as: "address",
      });
      Account.hasOne(models.RFToken, {
        foreignKey: "Account_ID",
        as: "RFToken",
      });
    }
  }
  Account.init(
    {
      Account_ID: DataTypes.INTEGER,
      First_Name: DataTypes.STRING,
      Last_Name: DataTypes.STRING,
      Email: DataTypes.STRING,
      Phone: DataTypes.STRING,
      Avatar: DataTypes.STRING,
      Status: DataTypes.STRING,
      Password: DataTypes.STRING,
      Role_ID: DataTypes.INTEGER,
      Address_ID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};
