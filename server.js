const express = require('express'); //need express to make routes
const sequelize = require('./db/connection'); //need connection object to connect to the database
const path = require('path'); // need path for making files paths
const routes = require('./controllers');//need the controllers so that we can use the routes
const exphbs = require('express-handlebars');//need for using handlebars
const hbs = exphbs.create({ }); 

const app = express();//need to initialize the express variable
const PORT = process.env.PORT || 3001; //define the port that the connection will be on
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const session = require('express-session'); //initalize express-session

const SequelizeStore = require('connect-session-sequelize')(session.Store); //create store for session, this makes it so the session goes into the database

//make session object 
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//use session
app.use(session(sess));

app.use(express.json()); // needed to allow express to use json objects
app.use(express.urlencoded({ extended: true })); //needed to allow express to decode query url strings
app.use(express.static(path.join(__dirname, 'public'))); // make sure database loads stylesheets and javascript in public folder

// turn on routes
app.use(routes);

// turn on connection to database and server
sequelize.sync({ force: false}).then(() => { // can use force to refresh the database
  app.listen(PORT, () => console.log('Now listening'));
});