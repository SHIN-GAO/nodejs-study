const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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
    let person = req.params.name;
    res.render('form', {
        person: person
    })
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
})
app.listen(3000);