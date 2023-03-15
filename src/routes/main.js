const router = require('express').Router();

const { index, admin } = require('../controllers/mainController.js');
const accessAdmin = require('../middlewares/accesAdmin');

router
    .get('/', index)
    .get('/admin', accessAdmin, admin)

module.exports = router;