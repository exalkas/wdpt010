const mongoose = require('mongoose')

const {Schema} = mongoose

const postSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: [],
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

        text : {
            type: String,
            required: true
        }
    }]
})


module.exports = mongoose.model('Post', postSchema)