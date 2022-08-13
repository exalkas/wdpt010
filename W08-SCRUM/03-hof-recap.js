// foreach

/**
 * Any function that is being passed to another function
 * is called Callback function
 */

const numbers = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach((item, idx, array,) => console.log(item, 'idx is ', idx, array))

function customForEach(array, cb) { // cb is a callback function

    console.log('the cb is', cb)

    if (!Array.isArray(array)) return 'no array in input'

    for (let i = 0; i < array.length; i++) {
        cb(array[i])
    }
}

function printWhatever(parameter) {
    console.log(parameter)
}

customForEach(numbers, printWhatever)

function customForEachV2(array) {

    if (array.isArray()) {
        
    }
}

/**
 * 
 */

const smoker = true;
console.log(smoker.toString())

const student = {
    name: 'john',
    address: 'berlin',
    lkjdh: 'asdf',
    adsf: 'asdef',
}

/**
 * Prototype is a property of an object and it contains
 * methods and properties from its parent
 */

/**
 * Map method
 * 
 * IT RETURNS AN ARRAY
 */
 numbers.map(item => {return item + 1})

 console.log("🚀 ~ numbers", numbers)
const numbersIncreased = numbers.map(item => {
    console.log('item form map', item)
    return item + 1
})
console.log("🚀 ~ numbersIncreased", numbersIncreased)


/**
 * Filter
 * 
 * IT RETURNS AN ARRAY
 */

// in ARROW functions when there is only one statement you can skip the {} and automatically the expression value will be returned



const filteredArray = numbers.filter(item => {
    return Number.isInteger( item / 2)
})
console.log("🚀 ~ filteredArray", filteredArray)

const filteredArray2 = numbers.filter(item => item % 2 === 0)
console.log("🚀 ~ file: 03-hof-recap.js ~ line 79 ~ filteredArray2", filteredArray2)

const filteredArray3 = numbers.filter(item => 2 + 2)
console.log("🚀 ~ filteredArray3", filteredArray3)

/**
 * findIndex
 * 
 * it returns the index of the item that matches the filter
 * if no item found it returns -1
 */

console.log('number 1 is at place:', numbers.indexOf(1))

const students = [
    {
        name: 'john',
        address: 'berlin',
        courses: ['react', 'node', 'express'],
        grades: {
            course: 'math',
            score: '85',
            started: 1999
        }
    },
    {
        name: 'peter',
        address: 'berlin',
        courses: ['react', 'node', 'express'],
        grades: {
            course: 'history',
            score: '55',
            started: 1999
        }
    },
    {
        name: 'jim',
        address: 'berlin',
        courses: ['react', 'node', 'express'],
        grades: {
            course: 'math',
            score: '100',
            started: 1999
        }
    },
]

console.log('number 1 is at place:', students.indexOf('history'))

// console.log('student with history is at place:', students.findLastIndex(item => item.grades.course === 'history'))

students.forEach(item => {
    if (item.name === 'jim') {
        item.name = 'george'
    }
console.log("🚀 ~ file: 03-hof-recap.js ~ line 141 ~ students", students)
})

/**
 * Reduce
 * 
 * From multiple values using this method you can reduce them to one
 * 
 * the sum concept is an example of reducing somthing
 * 
 * it returns a VALUE (can be any value or object or array)
 * 
 * array.reduce(fn, initial value)
 */

const sum = numbers.reduce((acc, item) => acc += item, 0)
console.log("🚀 ~ sum", sum)



function findDuplicates(array) {

    const cleanArray = []
    
    for (let i = 0; i < array.length; i++) {
        
        if (cleanArray.includes(array[i])) {
            
        } else {
            cleanArray.push(array[i])
        }
    }
    
    console.log("🚀 cleanArray", cleanArray)
}

findDuplicates(numbers)

const cleanedNumbers = numbers.reduce((acc, item) => {

    if (acc.includes(item)) {

    } else {
        acc.push(item)
    }

    return acc
} , [] )
console.log("🚀 ~ cleanedNumbers", cleanedNumbers)

const oddNumbers = numbers.reduce( (acc, item) => {
    if (item % 2 !== 0) {
        acc.push(item)
    }
    
    return acc
}, [])
console.log("🚀 ~  oddNumbers", oddNumbers)

// Number of students with math course
// {
//     name: 'john',
//     address: 'berlin',
//     courses: ['react', 'node', 'express'],
//     grades: {
//         course: 'math',
//         score: '85',
//         started: 1999
//     }
// },
const mathStudents = students.reduce((acc, item) => {

    if (item.grades.course === 'math') acc++

    return acc
}, 0)
console.log("🚀 ~ mathStudents", mathStudents)
