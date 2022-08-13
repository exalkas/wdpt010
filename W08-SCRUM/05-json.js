const jsonObject = {

    "name": "john",
    "age": 50
}

console.log(jsonObject);

console.log(JSON.stringify(jsonObject))
console.log(typeof JSON.stringify(jsonObject))

const readyForJSONstring = '{"name": "peter"}'

console.log(JSON.parse(readyForJSONstring));


const newObj = JSON.parse(readyForJSONstring)

console.log(newObj);
console.log(newObj.name);

const todos = [
    {task: 'wash'},
    {task: 'drink'},
    {task: 'goto cinema'},
]

console.log(JSON.stringify(todos))

// localStorage.setItem('todos',  JSON.stringify(todos))

// const todosArray = localStorage.getItem('todos')

