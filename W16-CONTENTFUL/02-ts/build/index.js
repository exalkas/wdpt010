"use strict";
let studentName = 'John'; // IMPLICIT
studentName = '5';
let carBrand = 'Toyota'; // EXPLICIT
let plates = 12345;
let sedan = false;
let model = 'supra';
model = 750;
const names = ['john', 'john', 'peter'];
const numbers = [1, 2, 3];
// numbers.push('a') //error
const student = { age: 13, address: 'berlin' };
const student2 = {};
student2.address = 'paris';
let numberOfBoys = 55;
const jim = {
    name: 'jim',
    age: 12,
    city: 'paris',
};
function Demo(props) {
}
const react = {
    color: 'red',
    products: ['1', '2'],
    class: 'flex items-center',
    cb: 'fn() => {}'
};
// union types
let fruit = 'apple';
fruit = 332;
// fruit.toLowerCase()
function demoReturn() {
    return 5;
}
function demoReturnNothing(a, b) {
    const age = 13 * Math.floor(3214);
    console.log('void');
}
demoReturnNothing(3, 5);
demoReturnNothing(3);
function demo2({ placeholder }) {
}
function demo3({ placeholder }) {
}
const demoFnType = (color) => {
    if (color === 'red')
        return 5;
    return 6;
};
demoFnType('5');
