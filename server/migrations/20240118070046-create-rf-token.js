'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RFTokens', {
      Account_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      refresh_token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expire_date: {
        type: Sequelize.DATE,
        allowNull: false
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
    await queryInterface.dropTable('RFTokens');
  }
};