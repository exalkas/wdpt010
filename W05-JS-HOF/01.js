/**
 * Topics
 * 
 * hoisting
 * 
 * Higher Order Functions
 * 
 * For each loop
 */

/**
 * Switch statement
 * 
 * syntax:
 * 
 * switch (expression) {
 * 
 *  case value:
 *      some code 
 *  case anothervalue:
 *      some other code
 *  default :
 *      some code
 * }
 */


function whatToWear(weather) {

    if (weather === 'sunny') {
        return 'better put on a t-shirt'
    } else if (weather === 'rainy') {
        
        return 'better put on a raincoat'
    } else if (weather === 'rainy') {
        
        return 'better put on a raincoat'
    } else if (weather === 'rainy') {
        
        return 'better put on a raincoat'
    } else if (weather === 'rainy') {
        
        return 'better put on a raincoat'
    } 

}

console.log(whatToWear('sunny'))
console.log(whatToWear('rainy'))
console.clear()

function whatToWearWithSwitch(weather) { // this is a parameter

    // console.log('wheather is', weather)

    switch (weather) {
        default:
            console.log('unknown weather');
            break;
        case 'sunny':
            console.log('better put on a t-shirt');
            break;
        case 'rainy':
            console.log('better put on a raincoat');
            break;

    }
}

whatToWearWithSwitch('sunny') // this is an argument - the value
whatToWearWithSwitch('snowy') // this is an argument - the value

/**
 * 91-100 -> A
 * 81-90 -> B
 * 71-80 -> C
 */
 console.log('-------------------------------');
function getGrade(score) {

    switch (true) {
        case score >= 91 && score <= 100 :
            console.log('You get an A');
            break;
        case score >= 81 && score <= 90 :
            console.log('You get an B');
            break;
        default:
            break;
    }


}

getGrade(99)
getGrade(89)

//  const grade='A';  
//  let result;  
//  switch(grade) {  
//      case 'A':  
//          result+="10";  
//      case 'B':  
//          result+=" 9";  
//      case 'C':  
//          result+=" 8";  
//      default:  
//          result+=" 0";  
//  }  
//  console.log(result); 

const grade = 'A';  
 let result = 0;  
 
 switch(grade)
 {  
     case 'A':  
         result += 10 ;  
     case 'B':  
         result += 9;  
     case 'C':  
         result += 8;  
     default:  
         result += 0;  
 }  
 
 console.log(result)

 /**
  * hoisting
  */
someFunction()

 function someFunction() {
    console.log('hello Im hoisted');
 }

//  console.log("🚀 ~ file: 01.js ~ line 139 ~ total", total)

//  const total = 13

/**
 * Higher Order Functions
 * 
 * These are functions that accept as parameter another function
 */
 console.log('-------------------------------');
function higherOrderFunction(someFunction) {
    
    console.log("🚀 someFunction is", someFunction)

    
    someFunction();
}

function toBeExecuted() {
    
    console.log("🚀 Hello from toBeExecuted")
    
}

// calling function higherorder and passing to it another function
higherOrderFunction(toBeExecuted)

/**
 * forEach
 * 
 * array.forEach(accepts a function)
 */

const fruits = ['apple', 'banana', 'orange']
const listItems = () => { // arrow function which is a function expression
    console.log('hello from arrow function')
}
listItems()

const lessTyping = fruit => console.log('fruit is', fruit)

function lessTypingV2 (fruit) {
    console.log('fruit v2 is', fruit)
}



fruits.forEach((item, idx) => { 
    console.log('inside for each: fruit is', item, 'and idx is', idx)
    console.log('inside for each: another line')
    console.log('inside for each: ', item + " love it")

})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let total = 0

numbers.forEach((number) => total = total + number)

total = 0

numbers.forEach((number) =>{ 
    
    console.log("🚀 number is", number)
    
    total = total + number
    console.log("🚀 total is", total)
} )

console.log("🚀 total is", total)

/**
 * rest operator
 * 
 * syntax: ...someVariablename
 * 
 * used in function declarations
 * 
 * there cannot be more parameters after it in the function declaration
 */

console.log('---------------------')
function findTotal(number1, ...numbers ) {

    console.log('numbers is', numbers)
}

findTotal(1, 2, 3, 4, 5, 6, 'hello', null , undefined)
function addToArray(...items) {

    const array = []
    
    items.forEach(item => array.push(item))

    // for (let i = 0; i < array.length; i++) {
    //     array.push(items[i])
    // }

    console.log("🚀 ~ array", array)
}


addToArray('dog', 'cat', 'ant', 'chicken')

