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
const carts = [
    { // 1
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 2
        user: "alkis",
        product: "shocks",
        quantity: 2
    },
    { // 3
        user: "jim",
        product: "Hat",
        quantity: 3
    },
    { // 4
        user: "john",
        product: "Underware",
        quantity: 3
    },
    { // 5
        user: "jim",
        product: "Hat",
        quantity: 3
    },
    { // 6
        user: "george",
        product: "Hat",
        quantity: 3
    },
    { // 7
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 8
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 9
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 10
        user: "alkis",
        product: "Hat",
        quantity: 3
    }
]

// Write functions to:
// add a product to the cart
// list the products of the cart for a specific user
// change the quantity of a product in that cart
// delete a product from the cart
// find the sum ot the products value for that cart

// addProduct
// listAllProducts // filter
// listProductsForUser // filter + 
// getTotalItemsForUser //reduce
// getTotalCartForUser 
// deleteItemFromCart

function addProduct(user, product, quantity) {

    carts.push({
        user,
        product,
        quantity
    })

}
addProduct('jim', 'ring', 50)
console.log('carts now is', carts)

// Version 2
function addProductV2(product) {

    carts.push(product)

}

const newProduct = {
    user: 'jim',
    product: 'ring',
    quantity: 50
}
addProductV2(newProduct)
console.log('carts now is', carts)

// 2. list products for a specific user
console.log('-------------------');
function listAllProducts (user) {

    const results = carts.filter(item => item.user === user)

    console.log(`results for user ${user} are`, results)
}

// const tempArray = []

// for (let i = 0; i < carts.length; i++) {
//     item => item.user === user

//     if (carts[i].user === user ) {
//         tempArray.push(carts[i])
//     }
// }

listAllProducts('jim')
listAllProducts('alkis')

// 03. change the quantity of a product in that cart

function updateQuantity(user, product, quantity) {

    const idx = carts.findIndex(item => item.user === user && item.product === product)
    
    console.log('idx is', idx)

    carts[idx].quantity = quantity
}

updateQuantity('jim', 'ring', 123)
console.log("🚀 updateQuantity ~ carts", carts)

// 04. delete a product from the cart

function deleteProduct(user, product, quantity) {
    
    const idx = carts.findIndex(item => item.user === user && item.product === product && item.quantity === quantity)

    carts.splice(idx, 1)
}

deleteProduct('jim', 'ring', 123)
deleteProduct('jim', 'Hat', 3)
console.log("🚀 deleteProduct", carts)

// 05. find the total amount of items for a user 

function findItemsAmount(user) {

    const total = carts.reduce((acc, item) => {

        if (item.user === user) {
            acc += item.quantity
        }

        return acc
    } , 0)

    console.log('the total is', total)
}

findItemsAmount('jim')
findItemsAmount('george')
findItemsAmount('alkis')

// 06. put some order in the carts array
function putOrder() {

    const array = carts.reduce((acc, item) => {

        // check if there is an item with such a user and such a product
        // if yes, updated the quantity (add the item quantity to the acc quantity)
        // if no add the item to the acc

        console.log('item is', item)

        if (acc.length > 0) {

            const idx = acc.findIndex(item2 => item2.user === item.user && item2.product === item.product)

            if (idx > -1) { // there is such a user in the acc
                acc[idx].quantity += item.quantity
            } else { // there is not such a user in the acc
                acc.push(item)

            }

            console.log("🚀 ~ array1 ~ idx", idx)
            console.log("🚀 ~ Current acc is", acc)
        } else {
            acc.push(item)
        }
        
        return acc
    } , [])

    console.log('the new array is', array)
}

putOrder()

/**
 * short circuit
 * 
 * 
 */

const a = false;
const b = 'hello world';

const smoking = a !== false && b
console.log("🚀 ~ file: 03-cart-exercise.js ~ line 236 ~ smoking", smoking)

console.log('-------------6B-------------');

// 06. put some order in the carts array
function putOrderAndrea() {

    const array = carts.reduce((acc, item) => {

        // check if there is an item with such a user and such a product
        // if yes, updated the quantity (add the item quantity to the acc quantity)
        // if no add the item to the acc

        console.log('item is', item)


            const idx = acc.findIndex(item2 => item2.user === item.user && item2.product === item.product)

            if (idx > -1) { // there is such a user in the acc
                acc[idx].quantity += item.quantity
            } else { // there is not such a user in the acc
                acc.push(item)

            }

            console.log("🚀 ~ array1 ~ idx", idx)
            console.log("🚀 ~ Current acc is", acc)
        
        return acc
    } , [carts[0]])

    console.log('the new array is', array)
}

putOrderAndrea()