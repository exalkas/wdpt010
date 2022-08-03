/**
 * Subclassing 
 * 
 * static
 */

class Person {

    constructor(name, age, address) {

        this._name = name;
        this._age = age;
        this._address = address;
    }

    getName() { // getter
        return this._name;
    }

    setName(name) { //setter
        this._name = name;
    }

    print() {
        console.log(`Name is ${this._name} and age is ${this._age} and address is ${this._address}`);
    }
}

const john = new Person('John', 20, 'berlin')
john.print()

class Teacher extends Person {

    constructor(name, age, address, major) {
        super(name, age, address)

        this.major = major
    }

    print() { // overriding
        console.log(`Name is ${this._name} is a Teacher with major ${this.major}`);
    }
}

const alkis = new Teacher('Alkis', 49, 'greece')
alkis.print();

class School {

    constructor() {

        this.teachers = []
        this.students = []
        this.courses = []
    }

    addTeacher(teacher) {
        this.teachers.push(teacher)
    }

    listTeachers() {
        return this.teachers;
    }

    static printAll() {
        console.log(this)
    }
}

const wbs = new School()

School.printAll()

wbs.addTeacher(alkis)
wbs.addTeacher(john)
console.log(wbs.listTeachers());

// Static

class Dom {

    static add(type, parent) {

        const element = document.createElement(type)

        parent.appendChild(element)

        return element;
    }
}

const whatever = new Dom()

const body = document.querySelector('body')
// console.log('body is', body)

// whatever.add('div', body) error, whatever.add doesn't exist


const main = Dom.add('main', body)

const ul = Dom.add('ul', main)

const teachers = wbs.listTeachers()
// console.log("🚀 ~ teachers", teachers)

teachers.forEach(item =>{ 
    
    const li = Dom.add('li', ul)
    li.innerHTML = `<p>${item._name}</p>`

})

// body.innerHTML = '' deletes all html

console.log(Date.now())
console.log(new Date('3/8/2022'))
console.log(Math.PI)

alkis._name = 'peter'

console.log("🚀 ~ alkis", alkis._name)

class ArrayOperations {

    static add(array, ...items) {

        items.forEach(item => array.push(item))

        return array
    }
}

console.log(ArrayOperations.add(teachers, 'jim', 'george', 'carlos', 'shir'))
