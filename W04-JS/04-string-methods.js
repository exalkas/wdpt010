
const string = 'hello world'

console.log('the length of the string is', string.length);
console.log('the first character is', string[0]);
console.log('w character is', string[6]);
console.log('the last character is', string[string.length - 1]);

// indexOf()
/**
 * find the @ char in the string
 * 
 * email: john@email.com
 */
console.log('-----------------------------');
const email = 'john@email.com'

console.log('the index of the @ is', email.indexOf('@'));
console.log('the index of the @ is', email.indexOf('w'));

/**
 * users are adding by mistake spaces before or after their username
 * 
 * trim()
 */

const username = '    john   '
console.log('the initial username is', username);
console.log('the trimmed username is', username.trim());

/**
 * to get a piece of a string use substring()
 * 
 * syntax: string.substring(start, end) note: the end is not included
 */

const domain = email.substring(5);
console.log('the domain is', domain);

/**
 * toLowerCase(), toUpperCase()
 */

console.log('the email all UPPERCASE is', email.toUpperCase());

// check if a character is upppercase
const letter = 'A'

console.log('the letter is uppercase', letter.toUpperCase() === letter);

/**
 * find if a character(or more than characters) is included in a string
 */

const post = `the quick brown fox 

jumps over the lazy 
dog`

// const stringWithQuotes = 'the quick brown fox 
// jumps over 
// the lazy dog'
const searchTerm = 'fox'

console.log('the search term is included in the post', post.includes('asdflkjhasdlkfalsdkjh'));

/**
 * template strings
 */

const anotherPost = `The search term is ${searchTerm} ${5 + 3 +1}
${'we are all here' ? 'yeeeees' : 'nooooo'}`

console.log('another post is', anotherPost);


/**
 * Literals
 */


const age = 39

const array = [1, 2, 3]

const object = {
    name: 'John',
    age: 45
}

/**
 * ternary operator
 * 
 * expression ? expr : expr
 * 
 * expression ? this part will be executed if expr is true : only when expr is false
 */

// 

const isOld = age > 40 ? 'yes' : 'no'
console.log('is old', isOld);

/**
 * NaN
 */

const number = 3
const text = 'abcd'

console.log(number / text);

/**
 * Infinity and -Infinity
 */

const expenses = [1, 3, -2 , 5]
let smallest  = 1000000000;

let biggest = -Infinity;

expenses[0] < smallest ? smallest = expenses[0] : smallest = smallest;
console.log('the smallest is', smallest);
expenses[1] < smallest ? smallest = expenses[1] : smallest = smallest;
console.log('the smallest is', smallest);
expenses[2] < smallest ? smallest = expenses[2] : smallest = smallest;
console.log('the smallest is', smallest);
expenses[3] < smallest ? smallest = expenses[3] : smallest = smallest;
console.log('the smallest is', smallest);
