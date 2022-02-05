const router = require('express').Router();

const cRoutes = require('./comment-routes');
const uRoutes = require('./user-routes');
const pRoutes = require('./post-routes');

router.use('/comments', cRoutes);
router.use('/users', uRoutes);
router.use('/posts', pRoutes);


module.exports = router;