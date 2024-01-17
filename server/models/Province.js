const { Sequelize, sequelize } = require('../config/dbConnect');

const Province = sequelize.define('Province', {
    ProvinceID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

module.exports = Province;
