const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController')

router.route('/').get(defaultController.index);
router.route('/customize').get(defaultController.customize).post(defaultController.getProduct);
router.route('/solve').get(defaultController.solve).post(defaultController.getProblem);
router.route('/appearance-and-fragrance').get(defaultController.appearanceandfragrance).post(defaultController.getFnC);

module.exports = router;