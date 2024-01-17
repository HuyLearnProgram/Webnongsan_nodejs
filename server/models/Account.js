const { Sequelize, sequelize } = require("../config/dbConnect");
const Address = require("./Address");

const Account = sequelize.define("Account", {
  Account_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  First_Name: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  Last_Name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true
  },
  Phone: {
    type: Sequelize.STRING(10),
    allowNull: false,
    unique: true
  },
  Avatar: Sequelize.STRING,
  Status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Role_ID: {
    type: Sequelize.SMALLINT,
    allowNull: false,
  },
  Address_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Set up the relationship
Account.belongsTo(Address, { foreignKey: "Address_ID" });

module.exports = Account;
