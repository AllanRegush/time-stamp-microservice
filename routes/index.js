const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController')
const timeStampController = require('../controllers/timeStampController');

// View Routes
router.get('/', viewController.index);


// Api Routes
router.get('/api/timestamp/:date_string?', timeStampController.getStamp);


module.exports = router;