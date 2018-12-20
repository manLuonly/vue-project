var express = require('express');
var app = express();

// 引入路由模块
var FilmRouter = require('./routes/film.js');
var UserRouter = require('./routes/user.js');
var filmDetailRouter = require('./routes/filmDetail.js');
var Cinemas = require('./routes/ciname.js');
var Search = require('./routes/search.js');

// 使用路由模块，中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/film/', FilmRouter);
app.use('/api/filmDetail/',filmDetailRouter);
app.use('/api/user/', UserRouter);
app.use('/api/',Cinemas);
app.use('/api/',Search);

app.listen(3000);
console.log('服务启动成功');
