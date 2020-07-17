const Sequelize = require("sequelize");

const connection = new Sequelize('jornal', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;