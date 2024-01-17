const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.SERVER_USERNAME,
  process.env.SERVER_PW,
  {
    host: process.env.SERVER_HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("SQL Server connected");
  } catch (e) {
    console.log("Error: ", e);
  }
};

module.exports = dbConnect;
