var express = require('express');

var userController = require('../controllers/user.controller');

var router = express.Router();

router.get('/', userController.index);

router.get('/search', userController.search);

router.get('/create', userController.create);

router.get('/:id', userController.get);

router.post('/create', userController.postCreate);

module.exports = router;