const router = require('express').Router(); // need so we can use the express router

const apiRoutes = require('./api'); // needed so we can import all of the api routes
const dashboardRoutes = require('./dashboard-routes');//need so we can import the dashboard routes
const homeRoutes = require('./home-routes.js'); // need so we can import the home routes
router.use('/api', apiRoutes); // use /api path for api routes
router.use('/dashboard', dashboardRoutes);//use the /dashboard path for dashboard routes
router.use('/', homeRoutes);//use the / path for the home routes

router.use((req, res) => { // sends a 404 error for every route that's not one of the pre-defined ones
  res.status(404).end();
});

module.exports = router; //export the router to be used in other files