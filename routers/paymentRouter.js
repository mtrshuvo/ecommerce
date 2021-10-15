const router = require('express').Router();
const Authorize = require('../middlewares/authorize');
const {initPayment} = require('../controllers/paymentController');

router.route('/')
    .get(Authorize,initPayment);
    
module.exports = router;