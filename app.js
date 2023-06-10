const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');
// const rfs = require('rotating-file-stream');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');

const pageRouter = require('./routes/index.js');
const apiRouter = require('./routes/api');
const Server = require('./src/index');

global.moment = require('moment');
moment.locale('ko');

// 미들웨어 설정
app.use(express.json({ limit : "500mb" })); 
app.use(express.urlencoded({ limit:"500mb", extended: false }));// URL 인코딩된 요청 본문 처리를 위한 미들웨어

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'ambc@!vsmkv#!&*!#EDNAnsv#!$()_*#@',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: null
    }
}));
app.use(cors());
app.use(helmet.frameguard())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 라우트 설정 
app.use('/',pageRouter);
app.use('/api',apiRouter);

global.LIVERELOAD = 'http://localhost:35729/livereload.js'

// 서버 시작

app.set('port', process.env.PORT || 1567);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
    