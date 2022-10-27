module.exports = {address: '123', age: 12} // like  export default
console.log("🚀 ~ module.exports", module
)

// export const someVariable = 5
module.exports.someVariable = 5

// export function test () {console.log()}
module.exports.test = function () {console.log('test function here')}