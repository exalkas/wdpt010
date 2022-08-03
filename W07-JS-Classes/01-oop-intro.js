const student = {
    name: 'alkis',
    age: 13
}

const student1 = {
    name: 'john',
    age: 15
}

class Student { // it's like a blueprint

    // In a class functions are called Methods.
    // the difference is that there is no need to use the keyword "function"
    constructor(name, age) { // constructor is called a method.

        // constructor method is being called upon object creation

        console.log('Constructor here!')

        this.name = name; // store the name that will be received from the called to the local (to the class) variable called also name
        this.age = age;

        console.log('this is', this)

    }

    changeName(newName) {

        this.name = newName;
        console.log('Now the student is', this)
    }

}

const alkis = new Student('alkis', 13) // alkis is an instance of Student Class
const john = new Student('john', 50) // instantiating a student

// console.log(console)

// console.clear()

alkis.changeName('peter')
console.log(alkis)

console.log('this is node this', this)

function thisDemo(){
    console.log('this is a function\'s this', this)
}

// thisDemo()

class Human {

    constructor(hair, height, weight, skinCOlor) {
        this.hair = hair;
        this.height = height;
        this.weight = weight;
        this.skinCOlor = skinCOlor;
    }
}

const shir = new Human('brown', 170, 50, 'white')
const julian = new Human('brown', 180, 80, 'white')
console.log('----------------------------')
console.log('shir is', shir)
console.log('julian is', julian)

console.log('human is', Human)
console.log('----------------------------')
// testing changeName
john.changeName('Sawyer')