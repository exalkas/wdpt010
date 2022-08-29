/**
 * Closure is a function that
 * 
 * 1. has a variable INSIDE IT
 * 2. returns a fucntion
 */

function closure() {

    let counter = 0
    // console.log("🚀 ~ name", name)

    return function () {
        counter ++
        console.log('counter is', counter);
    }
}

const caller = closure() // CALLER IS NOW A FUNCTION
console.log("🚀 ~ caller", caller)

caller()
caller()
caller()
caller()