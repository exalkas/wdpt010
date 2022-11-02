const students = [
    {
        name: 'john',
        city: 'berlin'
    },
    {
        name: 'john2',
        city: 'berlin2'
    },
    {
        name: 'john3',
        city: 'berlin3'
    },
]

module.exports.firstListener = (req, res) => {
    
    console.log('First listener here!')
    console.log("🚀 ~ req", req.query)
    console.log("🚀 ~ params", req.params)

    res.send(students)
}

module.exports.secondListener = (req, res) => {
    
    console.log('2nd listener here!')
    console.log("🚀 ~ req", req.query)
    console.log("🚀 ~ params", req.params)

    res.send(students)
}

// app.use('/users/add', (req, res, next) => {
//     console.log('this is inside a middleware');

//     next()
// })
// app.use((req, res, next) => {
//     console.log('-------------------------')
//     console.log('this is inside 2nd middleware');

//     next()
// })
// app.use((req, res, next) => {
//     console.log('this is inside 3rd middleware');

//     res.send('PIPELINE ENDS HERE')
// })