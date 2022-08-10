/**
 * Spread operator = ...
 * 
 * rest = ...
 * 
 * rest operator MUST be the last function parameter
 */

function restDemo(...rest) { // rest operator
    console.log('rest is', rest);
}

restDemo(1, 2, 3, 4, 'string', true)

const numbers = [100, 2, 3, 10, 3]

console.log('max is', Math.max(...numbers)) // spread operator
console.log("🚀 spread demo:", ...numbers)

const name = 'alkiviadis'

console.log('name spread:', ...name)

// convert a string to an array
const nameArr = [...name]
console.log("🚀 ~ nameArr", nameArr)
console.log("🚀 ~ name split: ", name.split(''))


// spread with object
const user = {
    name: 'john',
    address: 'berlin',
    age: 20
}
console.log("🚀 ~ user", {...user})
console.log('------------------------------');
/**
 * Destructuring assignment
 * 
 * it's syntax
 */


// const address = user.address
// const age = user.age

const {age, address, name1 } = user
console.log("🚀 ~address", address, 'age', age, 'name1 is', name1)

// how to easily delete a property from an object
const student = {
    name: 'john',
    address: 'berlin',
    age1: 20
}

const {age1, ...cleanedStudent} = student;
console.log("🚀 ~ cleanedStudent", cleanedStudent)
console.log("🚀 ~ student", student)

// changing property names
const {name: newName} = student // {oldprop: newpropname} = someobject
console.log("🚀 ~newName", newName)

// default values for properties

const {age1: ageStudent = 20, avg = 0} = student;
console.log("🚀 ~ ageStudent", ageStudent)
console.log("🚀 ~ avg", avg)

// real use case with destructuring assignment
function objDestructureDemo(person) {
    console.log(person.name, person.age1, person.address);
}
console.log('------------------------------');
objDestructureDemo(student)
console.log('------------------------------');

function objDestructureDemo2({name, age1, address}) {
    console.log(name, age1, address);
}
objDestructureDemo(student)
// objDestructureDemo(...numbers)

/**
 * Array destructuring
 * 
 * order of variables matters
 */
 console.log('------------------------------');
const fruits = ['apple', 'cherry', 'watermelon', 'pears']
console.log("🚀 ~ fruits", fruits)

const [f1, f2, f3, ] = fruits
console.log("🚀 ~ f1 f2 f3 are:", f1, f2, f3)

// skip items

const [s1, ,s3] = fruits
console.log("🚀 ~ s1, ,s3 are:", s1, s3)

const functions = [() => console.log('item 1'), 
() => console.log('item 2'),
() => console.log('item 3')
]

const [fun1, ,fun2] = functions
fun1()
fun2()

const noDestrFun1 = functions[0]
noDestrFun1()

// destructuring arrays with rest

const [r1, ...rest] = fruits
console.log("🚀 ~ ...rest are:", r1, rest)

// default values
const [d1, , d3, d4 = 'no email provided'] = fruits
console.log("🚀 ~ d4", d4)

const newfruits = [...fruits, 'apples', 'bananas']
console.log("🚀 ~ newfruits", newfruits)

const mixed = [...fruits, 1, 21,...numbers, 'string', true]
console.log("🚀 ~ mixed", mixed)