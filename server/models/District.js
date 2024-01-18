"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      District.belongsTo(models.Province, {
        foreignKey: "ProvinceID",
        as: "province",
      });
    }
  }
  District.init(
    {
      DistrictID: DataTypes.INTEGER,
      Name: DataTypes.STRING,
      ProvinceID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "District",
    }
  );
  return District;
};
