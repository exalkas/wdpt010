const mongoose = require('mongoose');

module.exports = async () => {

    try {
        
        await mongoose.connect(process.env.DB_STRING)
        
        console.log("🚀 ~ Connected to DB")

    } catch (error) {
        console.log("🚀 ~ error connecting to db", error.message)

        process.exit(1)
    }
}