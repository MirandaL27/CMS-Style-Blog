const express = require('express'); //need express to make routes
const sequelize = require('./db/connection'); //need connection object to connect to the database
const path = require('path'); // need path for making files paths
const routes = require('./controllers');//need the controllers so that we can use the routes

const app = express();//need to initialize the express variable
const PORT = process.env.PORT || 3001; //define the port that the connection will be on

app.use(express.json()); // needed to allow express to use json objects
app.use(express.urlencoded({ extended: true })); //needed to allow express to decode query url strings
app.use(express.static(path.join(__dirname, 'public'))); // make sure database loads stylesheets and javascript in public folder

// turn on routes
app.use(routes);

// turn on connection to database and server
sequelize.sync({ force: false }).then(() => { // can use force to refresh the database
  app.listen(PORT, () => console.log('Now listening'));
});