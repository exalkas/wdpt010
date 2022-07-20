/**
 * More array methods
 * 
 * map, filter, reduce
 */

const fruits = ['apple', 'banana', 'orange']

fruits.forEach(fruit => console.log(fruit))

/**
 * map
 * 
 * syntax: array.map(function)
 * 
 * returns an array
 */

const products = [
    { // 1
        name: "Blue Shirt",
        price: 10
    },
    { // 2
        name: "Hat",
        price: 15
    },
    { // 3
        name: "Coat",
        price: 100
    },
    { // 4
        name: "Ring",
        price: 72
    },
    { // 5
        name: "Bag",
        price: 19
    },
    { // 6
        name: "Scarf",
        price: 9
    },
    { // 7
        name: "Shoes",
        price: 57
    },
    { // 8
        name: "Underware",
        price: 7
    },
    { // 9
        name: "shocks",
        price: 3
    },
    { // 10
        name: "T-shirt",
        price: 50
    }
]

console.log(products[0].price)

products.forEach( product => console.log(product.price + '$'))

const productsWithPrices = products.map(product => {
    return {
        name: product.name,
        price: product.price + '$',
        size: 'L'
    }
})

console.log("🚀 products", products)
console.log("🚀 productsWithPrices", productsWithPrices)

/**
 * filter
 * 
 * syntax: array.filter(function)
 * 
 * returns an array based on the filter provided
 */


const productsLessThan30 = products.filter(product => product.price < 30)
console.log("🚀 productsLessThan30", productsLessThan30)

const productsS = products.filter(product => product.name[0].toLowerCase() === 's' )
const productsTest = products.filter(product => {console.log('90:', product)
return product.name[0].toLowerCase() === 's' 
})
console.log("🚀 productsS", productsS)
console.log("🚀 productsTest", productsTest)

/**
 * reduce
 * 
 * syntax: array.reduce(function)
 * 
 * USED TO RETURN ONE VALUE OUT OF MANY VALUES
 * 
 * the function that is passed to the reduce has the following syntax:
 * 
 * (acc, item) => some operation, initialvalue
 */

const numbers = [1, 2, 3, 4, 5]

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    
    total += numbers[i]
}
console.log("🚀 total", total)

console.clear()
const totalReduce = numbers.reduce((acc, item) => {
    
    console.log("🚀 acc", acc, "item is", item)

    acc += item

    console.log("🚀 acc updated", acc)

    
    return acc
}, 0)

console.log("🚀 total reduce:", totalReduce)

// find the duplicates in an array

const duplicated = [1, 3, 4, 3, 2, 43, 2, 2, 3, 2, 2]

const cleanedArray = duplicated.reduce((acc, item) => {

    if (!acc.includes(item)) { // if item is not in the accumulator
        acc.push(item); // add it
    }

    return acc
}, [])
console.log("🚀 cleanedArray ~ cleanedArray", cleanedArray)

// find the sum of prices

const totalPrices = products.reduce((acc, item) => {

    return acc += item.price
}, 0)
console.log("🚀 totalPrices", totalPrices/products.length)

// 



