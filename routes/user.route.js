var express = require('express');

var userController = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();

router.get('/', userController.index);

router.get('/cookie', (req, res, next) =>{
    res.cookie('user-id',123);
    res.send('something');
});

router.get('/search',  userController.search);

router.get('/create',  userController.create);

router.get('/:id', userController.get);

router.post('/create',validate.validatePostCreate, userController.postCreate);

module.exports = router;