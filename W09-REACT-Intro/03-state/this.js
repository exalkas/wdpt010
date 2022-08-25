/**
 * "this" is an operator
 * 
 * this is an object
 */

// console.log('this is', this);

function demoThis() {

    console.log('this inside function is', this)
}
// demoThis()

function demoCustomThis() {

    if (this.age > 18) {
        console.log('is an adult');
    } else {
        
        console.log('is a teenager');
    }

    console.log('this is', this)
}

demoCustomThis.call({age: 13, name: 'john'})