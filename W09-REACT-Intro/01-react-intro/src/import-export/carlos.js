// import someFunction from './moduleDemo'; // any name
// import {secondDemo as berlin} from './moduleDemo'

import someFunction , {secondDemo as berlin} from './moduleDemo'

someFunction()
berlin()

// named export inline

export function named() {
    console.log('this is the named function')
}