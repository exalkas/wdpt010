/*
 * 01 Easy
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number
 * Examples:
 * ("", 3) should return the string
 * ("abc", 3) should return the string abcabcabc
 * ("abc", -2) should return an empty string ("")
 */

function repeatString (str, num) {
    
    
    if (num < 0) {
        result = 'this is not a positive number';
    } else {
        
        let result = ''; // here will store the result
        
        for (let i = 0; i < num ; i++) {
           result = result + str
        }
    
        return result
    }
    

}

console.log(repeatString('shir', -2))
console.log(repeatString('shir', 3))

const fruits = ['apple', 'banana', 'orange', 'pineapple', 'strawberry'];
fruits.push('kiwi');
console.log('original array:', fruits);



// fruits = [] // reinitialize the array

const copyOfFruits = fruits

copyOfFruits.push('fig');
console.log('original array:', fruits);
console.log('copy of fruits is', copyOfFruits);

/*
 * 02 Easy
 * Write a function addTo that accepts a number as a parameter 
 * and adds all natural numbers smaller or equal than the parameter. 
 * The result is to be returned.
 * Example: addTo(3) should return 1+2+3 = 6.
 */
console.clear()

function addTo(number) {

    let total = 0;

    for (let i = 0; i <= number; i++) {

        console.log('i is', i)
        total += i
    }

    return total;
}

console.log(addTo(5));

for (let i = 0;; ) {
    console.log('this is a loop. i =', i );
    i++;
    if (i === 10) break;
}

/**
 * While loops
 * 
 * syntax:
 * 
 * while (exression that if evaluates to true the code will be executed) {
 *  code to be executed
 * }
 */

let i = 0;

while (i < 10) {
    console.log('this is inside while loop');
    i++ 
}

/**
 * do while loop
 * 
 * syntax:
 * 
 * do {
 *  // code to be executed
 * } while (exression that if evaluated to true then the code will CONTINUE running)
 */



/**
 * 03 Easy
 * Write a function spaces that takes a natural number n and 
 * returns a string of n dashes.
 * Example: spaces(1) should return '-'
 * '-----'
 */

function spaces(num) {

    let string = ''

    for (let i = 0; i < num; i++) {
        string = string + '-'
    }

    return string;
}

console.log(spaces(3))