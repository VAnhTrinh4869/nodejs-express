var express = require('express');
var multer = require('multer');

var userController = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();
var upload = multer({ dest: './public/uploads/' });

router.get('/', userController.index);

router.get('/cookie', (req, res, next) => {
    res.cookie('user-id', 123);
    res.send('something');
});

router.get('/search', userController.search);

router.get('/create', userController.create);

router.get('/:id', userController.get);

router.post('/create', upload.single('avatar'), validate.validatePostCreate, userController.postCreate);

module.exports = router;