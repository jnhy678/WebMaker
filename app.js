const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');
// const rfs = require('rotating-file-stream');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');

const dev = process.env.NODE_ENV !== 'production';
const pageRouter = require('./routes/index.js');
const apiRouter = require('./routes/api');
const Server = require('./src/index');

global.Server = require('./src/index.js');
global.moment = require('moment');
moment.locale('ko');

// const pageRouter = require('./routes/index');
let apiRouter = require('./routes/api');
// const Server = require('./src/config');

// const next = require('next');

// const nextApp = next({ dev });
// const handle = nextApp.getRequestHandler();


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
// app.use('/',pageRouter); // 페이지는 아마 쓸일 없겠지
app.use('/api',apiRouter);

global.LIVERELOAD = 'http://localhost:35729/livereload.js'

// 서버 시작
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});

module.exports = app;
    