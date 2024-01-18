"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.Account, {
        foreignKey: "Account_ID",
        as: "account",
      });
      Address.belongsTo(models.Ward, { foreignKey: "WardID", as: "ward" });
    }
  }
  Address.init(
    {
      Address_ID: DataTypes.INTEGER,
      WardID: DataTypes.INTEGER,
      Account_ID: DataTypes.INTEGER,
      Address_Name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
