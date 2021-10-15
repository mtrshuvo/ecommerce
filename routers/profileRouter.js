const router = require('express').Router();
const {setProfile,getProfile} = require('../controllers/profileController');
const Authorize = require('../middlewares/authorize');

router.route('/')
    .post(Authorize,setProfile)
    .get(Authorize,getProfile)

    module.exports = router;