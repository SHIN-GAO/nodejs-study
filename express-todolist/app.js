const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.listen(3001);
console.log('You are listening to port 3000');