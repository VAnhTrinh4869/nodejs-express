require('dotenv').config();
console.log(process.env.SESSION_SECRET);

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var authentication = require('./middleware/auth.middleware');

var port = 9000;
var app = express();

app.set('view engine','pug');
app.set('views','./views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/users',authentication.requireAuth, userRoute);
app.use('/auth',authRoute);

app.listen(port, () => console.log(`Server running in port ${port}`));







