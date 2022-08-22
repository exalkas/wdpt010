/**
 * export default 
 * 
 * can be only one per file
 * 
 * if a function is exported with default it can be imported with any name
 */


function demoExport() {
    console.log('hello from  demoexport')
}

function secondDemo() {
    
    console.log('hello from  second demo')
}

export default demoExport;
/**
 * NAMED EXPORTS MUST BE IMPORTED WITH THE EXACT SAME NAME AS THEY WERE EXPORTED
 * 
 * and also using curly braces
 */

export {secondDemo}; // THIS IS CALLED NAMED EXPORT