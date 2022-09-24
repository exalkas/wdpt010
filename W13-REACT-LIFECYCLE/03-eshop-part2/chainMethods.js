const numbers = [1, 2, 3, 4, 5, 6]


const result = numbers.filter(item => item > 2)

const result1 = result.map(item => item + 1)

console.log("🚀 ~ result1", result1 )

const result2 = result1.reverse()

console.log("🚀 ~ result2", result2)

console.log( numbers
    .filter(item => item > 2)
    .map(item => item + 1)
    .reverse().forEach(item => console.log(item))
);