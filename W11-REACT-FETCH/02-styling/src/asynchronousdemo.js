

const promise = new Promise((resolve, reject) => {

    if (2 + 2 === 5) {

        resolve()
    } else {

        reject()
    }

})
console.log("🚀 ~ promise", promise)



promise
.then(() => console.log('we got some data'))
.catch(error => console.log('there was error 500'))