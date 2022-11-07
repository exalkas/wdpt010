const Post  = require('../models/Post')

module.exports.add = async (req, res) => {

    try {

        const {owner, text} = req.body

        if (!owner || !text) {
            res.send({success: false, error: 1})
            return
        }

        const newPost = await Post.create(req.body)
            .then(item => item.populate({path: 'owner', select: 'username email'}))
        
            console.log("🚀 ~ newPost", newPost)

        if (!newPost) {
            res.send({success: false, error: 2})
            return
        }

        res.send({success: true, post: newPost})
        
    } catch (error) {
        console.log("🚀 ~ Error in post add ", error.message)

        res.send({success: false, error: error.message})
    }
}
module.exports.list = async (req, res) => {

    try {

        const posts = await Post.find()
        .limit(5)
        .skip(5)
        .populate({
            path: 'owner',
            select: 'username email'
        })
        console.log("🚀 ~ posts", posts)

        res.send({success: true, posts})
        
    } catch (error) {
        console.log("🚀 ~ Error in post list ", error.message)

        res.send({success: false, error: error.message})
    }
}