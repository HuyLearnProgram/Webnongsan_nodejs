'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      Product_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Product_Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      Image: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Detail: {
        type: Sequelize.STRING
      },
      Posting_Date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Unit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Category_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Account_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: fasle
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
    await queryInterface.dropTable('Products');
  }
  
};