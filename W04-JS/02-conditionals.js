console.log('hello from another file')

const slices = 16;
const people = 8;

console.log('Each person gets', slices/people);

/**
 * truthy and falsy values
 * 
 * falsy values:
 * false
 * 0
 * null
 * undefined
 * ''
 */

/**
 * the "+" operator has some rules:
 * 
 * if one of the operands is a string, the other one is converted to a string and string concatenation is performed
 */

const totalWithString = 5 + 'banana' + 2;
console.log('totalWithString is', totalWithString);

const total = 5 + true;
console.log('total is', total);

/**
 * the "-"
 * 
 * if one operand is a string then the result is a Not A Number
 */

 const minusWithString = 5 - 'banana';
 console.log('minusWithString is', minusWithString);

 /**
  * Comparison operators: >, <, >=, <= 
  * 
  */
console.log('---------------');

 console.log(5 > 2); // true
 console.log(5 < 2); // false

 console.log(5 >= 2); // true
 console.log(5 <= 2); // false
 console.log('---------------');
/**
 * Equality operators: ==, !=, ===, !==
 * 
 * ==: checks if the values are equal. Loose equality
 * === strict equality
 * != not equal (loose equality)
 * !== not equal (strict equality)
 */

    console.log(5 == 2); // false
    console.log(5 == '5'); // type coercion

    console.log(5 === '5'); // false, no type coercion

    console.log(5 != 2); // true
    console.log(5 != '5'); // false. they are equal because of type coercion
    console.log(5 !== '5'); // true. they are not equal 

    console.log('---------------');
/**
 * Conditionals:
 * 
 * if statement
 * 
 * if (expression) {
 *  code to be executed if the expression is true
 * } else {
 *  code to be executed if the expression is false
 * }
 */

if (people > slices) {
    console.log('not enough slices');

} else {
    
    console.log('Each person gets', slices/people);
}

const weather = 'dsaf'; //cloudy, rainy, sunny, snowy

if (weather === 'sunny') {
    console.log('it is sunny put on a t-shirt');
} else if (weather === 'rainy') {
    console.log('it is rainy put on a raincoat');
} else if (weather === 'snowy') {
    console.log('it is snowy put on a coat');
} else {
    console.log('it is unknown weather put on a hat');
}


