const router = require('express').Router(); // need the router

const userRoutes = require('./user-routes'); // need the userroutes

router.use('/users', userRoutes); // /api/users = userRoutes

module.exports = router;