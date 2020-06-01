var express = require('express');

var controller = require('../controllers/auth.controller');
var authentication = require('../middleware/auth.middleware');

var router = express.Router();

router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;