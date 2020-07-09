const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController')

router.route('/').get(defaultController.index);
router.route('/customize').get(defaultController.customize).post(defaultController.getProduct);

module.exports = router;