const router = require('express').Router();
const Authorize = require('../middlewares/authorize');
const {initPayment, ipn, successPayment, failedPayment, cancelPayment} = require('../controllers/paymentController');

router.route('/')
    .get(Authorize,initPayment);

router.route('/ipn')
    .post(ipn);

router.route('/success')
    .post(successPayment);

router.route('/failed')
    .post(failedPayment);
    
router.route('/cancel')
    .post(cancelPayment);
    
module.exports = router;