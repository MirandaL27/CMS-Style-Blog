const router = require('express').Router(); // need the router

const userRoutes = require('./user-routes'); // need the userroutes
const postRoutes = require('./post-routes');//need the postRoutes
const commentRoutes = require('./comment-routes');//need the commentRoutes

router.use('/users', userRoutes); // /api/users = userRoutes
router.use('/posts', postRoutes); // /api/posts = postRoutes
router.use('/comments', commentRoutes); // /api/comments = commentRoutes

module.exports = router;