const mongoose = require('mongoose')
const {Schema} = mongoose
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10;
const jwt = require('jsonwebtoken');

// userScheme is an instance of class Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    age: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false,
    },
    resetToken: {
        type: String
    }
}) 

userSchema.pre('save', async function (next) {

    
    const user = this;
    console.log("🚀 ~ this", this)

    if (user.isModified('password')) { // if password is being updated then execute the following code
        console.log('pre here!')
        const salt = await bcrypt.genSalt(SALT_ROUNDS)
        console.log("🚀 ~ salt", salt)
    
        user.password = await bcrypt.hash(this.password, salt)
        console.log("🚀 ~ hashedPass", user.password)
    }


    next()
})

userSchema.methods.generateToken = (_id) => jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '1h'})

// in db the collection should be 'users'
module.exports = mongoose.model('User', userSchema)