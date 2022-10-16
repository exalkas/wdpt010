let studentName = 'John' // IMPLICIT

studentName = '5'

let carBrand: string = 'Toyota' // EXPLICIT

let plates: number = 12345
let sedan: boolean = false

let model:any = 'supra'

model = 750

const names: string[] = ['john', 'john', 'peter']

const numbers = [1, 2, 3]

// numbers.push('a') //error

const student: {age: number, address: string} = {age: 13, address: 'berlin'}

const student2: {age?: number, address?: string} = {}

student2.address = 'paris'

// Custom types (Aliases)
type alkis = number

let numberOfBoys: alkis = 55

type pupil = {
    name: string,
    age: number,
    city: string
}

const jim:pupil = {
    name: 'jim',
    age: 12,
    city: 'paris',
    
}

interface Props {
    color: string,
    products: string[],
    class: string
}

function Demo(props:Props) {

}


interface ExtendedProps extends Props{
    cb: string
}

const react:ExtendedProps = {
    color: 'red',
    products: ['1', '2'],
    class: 'flex items-center',
    cb: 'fn() => {}'
}

// union types
let fruit: string | number = 'apple'
fruit = 332

// fruit.toLowerCase()

function demoReturn():number {
    return 5
}

function demoReturnNothing(a:number, b?:number): void {
    
    const age = 13 * Math.floor(3214)


    console.log('void')
}

demoReturnNothing(3,5)
demoReturnNothing(3)

function demo2({placeholder}: {placeholder: string}){

}
function demo3({placeholder}: {placeholder: alkis}){

}

type Input = (color:string) => number;

const demoFnType: Input = (color) => {

    if (color === 'red') return 5

    return 6
}

demoFnType('5')
