/**
 * 10 easy to medium
 * Write a JavaScript function to extract unique characters from a string.
 * Example string : "thequickbrownfoxjumpsoverthelazydog"
 * Expected Output : "thequickbrownfxjmpsvlazydg"
 */

function uniqueCharacters(string) {

    let stringUnique = ''

    for (let i = 0; i < string.length; i++) {

        if (!stringUnique.includes(string[i])) stringUnique += string[i]
    }

    return stringUnique
}

console.log(uniqueCharacters('thequickbrownfoxjumpsoverthelazydog'))
console.log(uniqueCharacters('tthhee'))