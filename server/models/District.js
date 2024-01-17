const { Sequelize, sequelize } = require("../config/dbConnect");
const Province = require("./Province");

const District = sequelize.define("District", {
  DistrictID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  ProvinceID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

District.belongsTo(Province, { foreignKey: "ProvinceID" });

module.exports = District;
