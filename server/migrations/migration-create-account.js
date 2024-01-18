"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Accounts", {
      Account_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      },
      Phone: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      Avatar: {
        type: Sequelize.STRING(100),
      },
      Status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      Password: {
        type: Sequelize.STRING(100),
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Accounts");
  },
};
