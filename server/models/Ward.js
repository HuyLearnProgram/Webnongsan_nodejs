const { Sequelize, sequelize } = require('../config/dbConnect');
const District = require('./District')
const Ward = sequelize.define('Ward', {
    WardID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    DistrictID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Ward.belongsTo(District, { foreignKey: 'DistrictID' });
module.exports = Ward;
