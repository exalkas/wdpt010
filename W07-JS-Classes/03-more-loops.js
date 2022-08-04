/**
 * for of loop
 * for in loop
 * 
 * 
 * for of -> is used with arrays
 * for in -> is used with objects
 */

const numbers = [1, 2, 3, 4, 5]

for (let number of numbers) { // number is the array item

    console.log('the number is', number)
}

const fruits = ['apple', 'banana', 'orange']

for (let fruit of fruits) {
    console.log('a fruit is', fruit);
}

/**
 * for in
 */
 console.log('-------------------------');
const student = {
    name: 'john',
    age: 20,
    address: 'berlin'
}

for (let key in student) {

    console.log('key is', key);
}

const country = {
    name: 'Germany',
    capital: 'Berlin',
    population: '100m'
}

for (let key in country) {
    console.log('the property is', key);

    console.log('the country value is', country[key] );
    
}

console.log('-------------------------');

// using for in with arrays
for (let key in fruits) {
    console.log('the fruit is', key);


}

// const fruits = ['apple', 'banana', 'orange']

const fruitsObject = {
    0: 'apple',
    1: 'banana',
    2: 'orange'
}

// using for of with objects produces error the object is not iterable
// for (let key of country) {
//     console.log(key);
// }

/**
 * Object methods
 * 
 * Object.keys(the object name)
 * Object.values(the object name)
 * Object.entries(the object name)
 */
 console.log('-------------------------');

 console.log("🚀 ~ keys",  Object.keys(country))
 console.log("🚀 ~ keys",  Object.values(country))
 console.log("🚀 ~ keys",  Object.entries(country));

 const countryArray = [
    [ 'name', 'Germany' ],
    [ 'capital', 'Berlin' ],
    [ 'population', '100m' ]
];

console.log(countryArray[0][1]);
console.log('length is', countryArray[0].length);

/**
 * JSON
 * 
 * Javascript Object Notation
 * 
 * {
 *  "key1": "alkis",
 *  "key2": 50,
 *  "key3": true
 * }
 */
