const router = require('express').Router();
const {getCartItem,createCartItem,deleteCartItem,updateCartItem} = require('../controllers/cartController');
const admin = require('../middlewares/admin');
const Authorize = require('../middlewares/authorize');

router.route('/')
    .post(Authorize,createCartItem)
    .get(Authorize,getCartItem)
    .put(Authorize,updateCartItem)

router.route('/:id')
    .delete(Authorize,deleteCartItem)
    

module.exports = router