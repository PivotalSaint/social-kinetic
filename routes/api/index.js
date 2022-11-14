const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;