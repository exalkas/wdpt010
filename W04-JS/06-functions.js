/**
 * Functions
 * 
 * a function is a block of code that we can call it execute it anytime
 * 
 * syntax:
 * 
 * function nameOfFunction() {
 *  code to execute
 * }
 */

function myFirstFunction() { // function statement or declaration
    console.log("Hello World");
}

myFirstFunction(); // calling the function 

// const slices = 28;
// const persons = 8;

function calculatePieces(slices = 8, persons = 1) { // parameters

    console.log('typeof slices', typeof slices);
    console.log('slices is', slices, 'and persons is' ,persons);
    
    if (typeof slices === 'number' ) {

        console.log('pieces per person', slices / persons);
    }

}

/**
 * ORDER OF ARGUMENTS AND PARAMETERS MATTERS
 * THE NUMBER OF PARAMETERS MUST MATCH THE NUMBER OF ARGUMENTS
 * TYPES OF PARAMETERS ARE NOT BEING CHECKED
 */

calculatePieces(28, 8, 333, 'asdf', true, [1, 2, 3]); // arguments
calculatePieces(2, 8); // arguments
calculatePieces(8); // arguments
calculatePieces(); // arguments
calculatePieces(true, {name: 'alkis'}); // arguments

/**
 * return statement
 * 
 * 1. ends the function execution
 * 2. returns a value to the caller
 */
function add(a, b) {

    console.log('the sum is', a + b);
}

add(1 , 2)

console.clear()

const grades = [20, 33, 44, 55, 66]; //43.6

// avg is the sum of some numbers divided by their count

function calcSum() {
    let total = 0;
    
    for (let i = 0; i < grades.length; i++) {
        
        total += grades[i];
    }
    
    return total;

}

function calcAvg(total) {

    const avg = total / grades.length;

    return avg;
}
 
const sum = calcSum();
console.log('sum is', sum);

console.log('the avg is', calcAvg(sum));

// the 'simple' way

function calcAverage() {

    let total = 0;
    
    for (let i = 0; i < grades.length; i++) {
        
        total += grades[i];
    }

    const avg = total / grades.length;

    console.log('the avg is', avg);
}

calcAverage()

/**
 * Arrow functions
 * 
 * they do not have the function keyword
 * they have the '=>' fat arrow
 */

function normal() {
    console.log('hello from normal function');
}

const arrowFunction = () => { // function expression
    console.log('hello from arrow function');
}

console.log('the arrow function is', arrowFunction);

arrowFunction()

// if there is only one parameter, you can skip the parentheses
// if there are two or more parameters the parenthesis are required
const arrowWithOneParameter = a => { 

console.log("🚀 ~ file: 06-functions.js ~ line 128 ~ arrowWithOneParameter", a)
   
}

arrowWithOneParameter(1)

// there is a single line of code we can omit the {}
const arrowWithOneLine = a => console.log(1 + a);
arrowWithOneLine(3)