const router = require('express').Router();
const {createCategory,getCatagory} = require('../controllers/categoryControllers');
const admin = require('../middlewares/admin');
const Authorize = require('../middlewares/authorize');

router.route('/')
    .post([Authorize,admin],createCategory)
    .get(getCatagory);

module.exports = router;