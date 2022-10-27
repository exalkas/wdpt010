const mongoose = require('mongoose')
// console.log("🚀 ~ mongoose", mongoose)

module.exports = async () => {


    try {
        
        await mongoose.connect(process.env.DB_STRING)

        console.log('DB connected')

    } catch (error) {
        console.log('DB connection error:', error.message)
    }

}