"use strict";
/*let time = 0;
let timer = setInterval( ()=> {
    time += 2;
    console.log(time + 'seconds have passed');
    if(time > 5) {
        clearInterval(timer);
    }
},2000)*/

/*function sayHi() {
    console.log('Hi');
}

sayHi();

function callFunction(fun, name) {
    fun(name);
}
callFunction((name) => {
    console.log(name + 'Bye');
}, 'Bye');*/

/*let staff = require('./count');

console.log(staff.counter(['1','2','3']));
console.log(staff.adder(2,3));*/



//node 事件

/*const events = require('events');
let myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(message) {
    console.log(message);
})
myEmitter.emit('someEvent','the event was emitted');
const util = require('util');

var Person = function(name) {
    this.name = name
}

util.inherits(Person, events.EventEmitter);

let shin = new Person('shin');
let jack = new Person('jack');
let lucy = new Person('lucy');

let person = [shin, jack, lucy];

person.forEach((person) => {
    person.on('speak', (message) => {
        console.log(person.name + 'said' + message);
    })
});

shin.emit('speak','hi');
lucy.emit('speak', 'I want a curry');*/

/*const fs = require('fs');
var readME = fs.readFile('readMe.txt', 'utf8', (err, data) => {
    fs.writeFile('write.txt', data, () => {
        console.log('write has finished');
    })
});

console.log('read has finished');*/

//const fs = require('fs');
//删除文件
/*fs.unlink('write.txt', () => {
    console('delete write.txt file');
});*/

/*fs.mkdir('stuff', () => {
    fs.readFile('readMe.txt', 'utf8', (err, data) => {
        fs.writeFile('./stuff/writeMe.txt', data, () => {
            console.log('copy sucessfully')
        })
    })
});*/
//fs.rmdirSync('stuff');

/*let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
myReadStream.setEncoding('utf8');

myReadStream.pipe(myWriteStream);

let data = '';
myReadStream.on('data', (chunk) => {
    console.log('new chunk received');
    data += chunk;
    myWriteStream.write(chunk);
})

myReadStream.on('end', () => {
    console.log(data);
})*/

/*const http = require('http');
let server = http.createServer((Request,Response) => {
    console.log('request received');
    Response.writeHead(200,{'content-Type':'application/json'});
    let myObj = {
        name: "shin",
        age: 24
    }
    Response.end(JSON.stringify(myObj));
})

server.listen(3000, '127.0.0.1');
console.log('server started on localhost port 3000');*/


/*const http = require('http');
const fs = require('fs');
let onRequest = (Request,Response) => {
    console.log('request received');
    Response.writeHead(200,{'content-Type': 'text/html'});
    let myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(Response);
}
let server = http.createServer(onRequest)

server.listen(3000, '127.0.0.1');
console.log('server started on localhost port 3000');*/