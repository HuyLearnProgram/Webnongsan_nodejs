'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      Order_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Order_Time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Order_Status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Account_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Address: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Total_Price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      Payment_Method: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Khi nhận hàng'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};