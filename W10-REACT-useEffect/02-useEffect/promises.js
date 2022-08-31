

const myPromise = new Promise((resolve, reject) => {
    // get some data from server
    // if no data received then generate an error and run the resolve

    reject()
    resolve();

    // if (true) {
    //     resolve();
    // } else {

    //     reject()
    // }
})


myPromise
.then(() => console.log('This is the resolve function that will be passed to the promise'))
.catch(() => console.log('there was an error'))