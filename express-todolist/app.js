const express = require('express');
const todoController = require('./constollers/todoController')
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));
todoController(app);
app.listen(3001);
console.log('You are listening to port 3001');