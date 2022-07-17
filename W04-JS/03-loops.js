/**
 * incremental operators:
 * 
 * ++: increments the value by 1
 * +=: adds the value to the variable
 */

const expenses = [1, 2, 3, 4]

let total = 0;

total = total + expenses[0];  // total += expenses[0];
console.log('total is', total);
total = total + expenses[1];  // total is 3
console.log('total is', total);
total = total + expenses[2]; 
console.log('total is', total); // total is 6
total = total + expenses[3]; 
console.log('total is', total); // total is 10

/**
 * Loops
 * 
 * for (expression; expression; expression) {
 *  execute some code
 * }
 * 
 * for (1. define the start. initialize a counter; 2. ; increase a counter)
 */
 console.log('-----------------------------');
let totalFromLoop = 0;

for (let i = 0; i < 4; i++) {

    console.log('1. expenses[i] is', expenses[i]);
    console.log('2. the counter', i)
    totalFromLoop = totalFromLoop + expenses[i]
    console.log('3. the totalFromLoop', totalFromLoop)
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
console.log('the first letter is', alphabet[0])

console.log('the length of the string is', alphabet.length)

for (let i = 0; i < alphabet.length; i++) {
    console.log('the letter is', alphabet[i])
}
