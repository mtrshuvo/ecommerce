const router = require('express').Router();
const {createProduct,
    getProduct,
    getProductById,
    updateProductById,
    getPhotoById,
    filterProduct,
} = require('../controllers/productController');
const admin = require('../middlewares/admin');
const Authorize = require('../middlewares/authorize');

router.route('/')
    .post([Authorize,admin],createProduct)
    .get(getProduct);
router.route('/:id')
    .get(getProductById)
    .put([Authorize,admin],updateProductById);

router.route('/photo/:id')
    .get(getPhotoById)
router.route('/filter')
    .post(filterProduct)

module.exports = router;