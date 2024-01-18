"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ward.belongsTo(models.District, {
        foreignKey: "DistrictID",
        as: "district",
      });
    }
  }
  Ward.init(
    {
      WardID: DataTypes.INTEGER,
      Name: DataTypes.STRING,
      DistrictID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Ward",
    }
  );
  return Ward;
};
