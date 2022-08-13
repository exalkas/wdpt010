// iterables like arrays, strings, objects

/**
 * loop means start from a point and go to other points and return to the initial one
 */
for (let i = 0; i < 10; i++) {

    console.log(i)
}

console.log('-------------');
const numbers = [1, 2, 3, 4, 5]

for (let number of numbers) {
    console.log(number) // console.log(numbers[i])
}
console.log('-------------');
// measure performance of for loop
console.time('for loop')

for (let i = 0; i < 1000000000; i++) {

}
console.timeEnd('for loop')
console.log('-------------');
// measure performance of for of loop
const bigGuy = new Array(1000000000);
console.log('length is', bigGuy.length)
console.log('-------------');
console.time('for OF loop')
// for (let number of bigGuy) {
  
// }
console.timeEnd('for OF loop')
console.log('-------------');

console.time('for in loop with array')
const length = bigGuy.length
for (let i = 0; i < length; i++) {
    
}
console.timeEnd('for in loop with array')

// forEach loop perfomance
console.log('-------------');

console.time('foreach loop')

// bigGuy.forEach(item => null)

console.timeEnd('foreach loop')

console.log('-------------');

const student = {
    name: 'john',
    address: 'berlin',
    courses: ['react', 'node', 'express'],
    "family name": 'john doe'
}

const dynamicProperty = 'name'

for (let key in student) {

    console.log(`${key} is ${student[key]}`)
}

console.log(student.name)
console.log(student[dynamicProperty])
console.log(student.dynamicProperty)
console.log(student["family name"])
console.log(student["name"])

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

function calcCourses() {

    let counter = 0;

    for (let student of students) {

        if (student.grades.course === 'math') counter++
    }

    return counter
}

console.log(`${calcCourses()} students studied Math`)