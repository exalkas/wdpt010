// comment a line

/* comment a block of code*/

// ; is used to separate statements
// semicolons can be omitted because there is a mechanism in JS calles 
// ASI (automatic semicolon insertion)

let persons = 6; // variable declaration: let persons , and "= 6" variable initialization, "6" is the value of the variable, the "=" operator
const slices = 8; // const means that variables can not change
// const someNameWithoutValue // error
let variableWithoutValue;
// 1 + 2 = 3

// operators: they are symbols that are used to perform operations on variables

// variable types: number, string, boolean, undefined, null. These are the primitive types of javascript

// 8 is a number, 0.4 is a number
// any character is a string. "abcd" is a string. "asd234" is a string.

const string = "asd"; // to declare a string, you need to use quotes. single, double, backtick

// boolean: George Boole
const johnIsASmoker = true;

// undefined: empty variable
const playersInTheGame = undefined;

// null: empty variable
const cars = null; // null data typed is used to declare that something has been left empty intentionally

/**
 * Variable types:
 * 
 * let, const, var
 */

let studentName = 'alkis'; // the value of this variable can be changed again.
studentName = 'andrea'; 

const studentAge = '30'; // the value of this variable can not be changed.
// studentAge = '31'; // this is an error

console.log(studentName);
console.log(studentAge);

/**
 * Expressions: 
 * 
 * a piece of code that will be evaluated to a single value
 * 
 * const total = 1 + 2;
 */

const total = 1 + 2; // the right part "1 + 2" is an expression

const total2 = 1 - 2 * 3; // there is what is called precedence. priority of operations.

console.log("total is", total);
console.log("total2 is", total2);

// Math operators: *, +, -, / 
// the "+" accepts two operands


// vairable names MUST BE UNIQUE in their scope

/**
 * Scope
 * 
 * global scope: the scope of the whole program
 * block scope: the scope of a block of code 
 * block scope is the code that exists in "{}"
 * 
 */

{
    const total2 = false; // this is an error
    var total3 = 1 + 2; 
    console.log("total3 is", total3);
}

var total3 = 56;
// () : parenthesis
// {} : curly brackets
// [] : square brackets

let notype = 5;
notype = 'hello'
notype = true;

/**
 * Data structures:
 * 
 * Arrays:
 * 
 * syntax: [item, item, item]
 * 
 * what is in the brackets includeing the brackets is called array literal
 */

const fruits = ['apple', 'banana', 'orange'];

// arrays are ORDERED data structures
// ORDERED means that the order of the items matters
// to retrieve an item from an array, you need to know the index of the item

// THE FIRST ITEM OF AN ARRAY HAS INDEX 0
// THE SECOND ITEM HAS INDEX 1
console.log('the second item is ', fruits[1]);
console.log('the first item is ', fruits[0]);

/**
 * Objects
 * 
 * their items are not ordered
 * their items are named
 */

const student = { // student is an object
    name: 'alkis', // this is called key/value pair
    age: 30,
    isSmoker: true,
    address: "berlin"
}

console.log('students name is', student.name)
console.log('he lives in', student.address)
console.log('his age is', student.age)
