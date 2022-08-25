console.log('A')

function demoAsynchronous () {
    
    
    
    setTimeout(() => {
        console.log('B')
    })
    
}

demoAsynchronous()
console.log('C')