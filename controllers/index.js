const router = require('express').Router(); // need so we can use the express router

const apiRoutes = require('./api'); // needed so we can import all of the api routes

router.use('/api', apiRoutes); // use /api path for api routes

router.use((req, res) => { // sends a 404 error for every route that's not one of the pre-defined ones
  res.status(404).end();
});

module.exports = router; //export the router to be used in other files