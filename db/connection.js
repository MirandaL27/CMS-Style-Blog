const Sequelize = require('sequelize'); //need sequelize to make the connection

require('dotenv').config(); //need access to environment variables to keep the username/password safe

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize; //export connection object so it can be used in other files