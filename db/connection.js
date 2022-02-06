const Sequelize = require('sequelize'); //need sequelize to make the connection

require('dotenv').config(); //need access to environment variables to keep the username/password safe

// create connection to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, { // pass in database name, username and password
  host: 'localhost', // connection server
  dialect: 'mysql',//sql language dialect
  port: 3306 // port connection is on
});

module.exports = sequelize; //export connection object so it can be used in other files