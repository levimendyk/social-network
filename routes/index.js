// router code LEVI-BASE CODE STARTER
const router = require('express').Router();
const apiRoutes = require('./api');

// at /api
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
