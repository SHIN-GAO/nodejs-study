const express = require('express');
const app = express();
/*const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer')
var createFolder = function (folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

let upload = multer({
    storage: storage
})
// create application/json parser
let jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.set('view engine', 'ejs');

app.get('/profile/:id/:name', (req, res) => {
    console.dir(req.params);
    res.send(`your requested to see a profile with the name of ${req.params.name}`);
});
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
});
app.get('/form/:name', (req, res) => {
    let person = {age: 29,name : 'Shin', hobbies: ['eating','sleeping']};
    res.render('form', {
        person: person
    })
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/', (req, res) => {
    console.dir(req.query);
    res.send(`home page: ${req.query.find}`);
});
app.post('/', urlencodedParser, (req, res) => {
    console.dir(req.body);
    res.send(req.body.name);
});
app.post('/upload', upload.single('logo'), (req, res) => {
    console.dir(req.file);
    res.send({
        'ret_code': 0
    });
})*/

//中间件
/*app.use((req,res,next)=> {
    console.log('first middleware');
    next();
    console.log('first middleware after');
})
app.use((req,res,next)=> {
    console.log('sencond middleware');
    res.send('ok');
})
app.get('/', (req, res, next) => {
    res.send('ok');
})*/

let indexRouter = require('./routes/index');
let userRouter = require('./routes/users')
app.use('/', indexRouter);
app.use('/users', userRouter);
app.listen(3000);
console.log('listening to port 3000')