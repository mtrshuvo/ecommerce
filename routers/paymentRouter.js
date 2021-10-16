const router = require('express').Router();
const Authorize = require('../middlewares/authorize');
const {initPayment, ipn} = require('../controllers/paymentController');

router.route('/')
    .get(Authorize,initPayment);

router.route('/ipn')
    .post(ipn);
    
module.exports = router;