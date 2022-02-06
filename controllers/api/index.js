const router = require('express').Router(); // need the router

const userRoutes = require('./user-routes'); // need the userroutes
const postRoutes = require('./post-routes');//need the postRoutes

router.use('/users', userRoutes); // /api/users = userRoutes
router.use('/posts', postRoutes); // /api/posts = postRoutes

module.exports = router;