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

const events = require('events');
/*let myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(message) {
    console.log(message);
})
myEmitter.emit('someEvent','the event was emitted');*/
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
lucy.emit('speak', 'I want a curry');