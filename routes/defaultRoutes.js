const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController')
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'default';
    next();
});
router.route('/').get(defaultController.index);
router.route('/customize').get(defaultController.customize).post(defaultController.getProduct);
router.route('/solve').get(defaultController.solve).post(defaultController.getProblem);
router.route('/appearance-and-fragrance').get(defaultController.appearanceandfragrance).post(defaultController.getFnC);
router.route('/id-and-payment').get(defaultController.idandpayment).post(defaultController.getCustomerInfo);

module.exports = router;