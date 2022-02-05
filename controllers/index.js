const router = require('express').Router();

const hmRoutes = require('./home-routes.js');
const dashRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api');

router.use('/dashboard', dashRoutes);

router.use('/', hmRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
