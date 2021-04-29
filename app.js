var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var api3Router = require('./routes/api3');;

var item1r = require('./routes/item1');;

var item3sale = require('./routes/item3sale');;

var save = require('./routes/save');

var getall = require('./routes/getwishlist');


var del = require('./routes/del2');

var update = require('./routes/update');

//  ~~~~~~~~~~


var deltest = require('./routes/deltest');
var updatetest =  require('./routes/updatetest');

var delete99 = require('./routes/delete');


// ~~~~~~~~~~~~~~~~~~~~~

var delsuccess = require('./routes/delsuccess');

var delfail = require('./routes/delfail');










var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),{extensions:['html']}));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api3', api3Router);
app.use('/item1', item1r);
app.use('/item3sale', item3sale);


app.use('/save', save);

app.use('/del', del);

app.use('/update', update);



app.use('/getall', getall);

app.use('/deltest', deltest);


app.use('/updatetest', updatetest);


app.use('/delete', delete99);

app.use('/delsuccess', delsuccess);

app.use('/delfail', delfail);






module.exports = app;
