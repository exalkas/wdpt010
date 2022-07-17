const fruits = ['mango', 'banana', 'peach', 'apple', 'kiwi', 'watermelon'];

/**
 * array.push(item)
 * 
 * adds at the end
 */

fruits.push('melon', 'cherries')

/**
 * array.unshift(item)
 */

fruits.unshift('strawberry', 'fig')

/**
 * array.pop()
 * 
 * removes THE LAST ITEM
 */

 fruits.pop()
 fruits.pop()
 
 /**
  * array.shift()
  * 
  * removes THE FIRST ITEM
  */
 
 fruits.shift();
 
 /**
  * change an item in an array
  * 
  * array[index] = newValue
  */
 
 fruits[0] = 'blueberry'
 
 /**
  * array.splice(index, howManyToRemove, itemToAdd)
  * 
  * to remove an item
  * array.splice(position where is the item, how many items to delete)
  * 
  */
 
 fruits.splice(5, 1)
 
 fruits.splice(0, 0, 'strawberry', 'kiwi')
 console.log('fruits are now', fruits);

 /**
  * find the index of an item
  * 
  * array.indexOf(item)
  */

 
 console.log('mango is at', fruits.indexOf('mango'));

 
const idx = fruits.indexOf('mango');
fruits.splice(idx, 0, 'strawberry', 'kiwi')

/**
 * find if item exists in array
 * 
 * array.inlcude(item)
 */

console.log('there is mango in the array', fruits.includes('mango'));

/**
 * return a part of the array
 * 
 * array.slice(start, end) 
 * end is not included
 */

console.log('fruits are', fruits);
console.log('the first three items are', fruits.slice(2));
console.log('the last three items are', fruits.slice(-3));