let counter = (arr) => {
    return 'There are '+arr.length+' elements in the array';
}

let adder = (a,b) => {
    return `the sum of the 2 numbers is ${a+b}`
}
module.exports = {
    adder: adder,
    counter: counter
}