const { Sequelize, sequelize } = require('../config/dbConnect');
const Ward = require('./Ward');
const Account = require('./Account')
const Address = sequelize.define('Address', {
    Address_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    WardID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Account_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Address_Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

// Set up the relationship
Address.belongsTo(Ward, { foreignKey: 'WardID' });
Address.belongsTo(Account, { foreignKey: 'Account_ID' });

module.exports = Address;
